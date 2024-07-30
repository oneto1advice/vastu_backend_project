import { UserRepository } from "../repo/userRepository";
import otpGenerator from 'otp-generator';
import request from 'request'
export class UserService {

  static async registerUser(user: any): Promise<any> {
    const emailExists = await UserRepository.checkEmailOrMobileExists(user.email, null);
    if (emailExists.exists) {
      return emailExists;
    }
    const mobileExists = await UserRepository.checkEmailOrMobileExists(null, user.mobile);
    if (mobileExists.exists) {
      return mobileExists;
    }
    return UserRepository.createUser(user);
  }


  static async sendOTP(emailOrMobile: any): Promise<any> {
    const user = await UserRepository.findUserByEmailOrMobile(emailOrMobile);
    if (!user) {
      throw new Error('User not found.');
    }

    const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    console.log("sunder", otp)
    await UserRepository.updateUserOTP(emailOrMobile, otp);
    var options = {
      method: 'GET',
      url: 'https://api.authkey.io/request',
      qs:
      {
        authkey: '7dc1c771263a4e70',
        sid: '12564',
        mobile: emailOrMobile, 
        country_code: '91',
        company: 'vaastudevayah',
        otp: otp        
      }
    };

    request(options, function (error, response, body) {
      if (error) {
        console.error('Error:', error);
        return;
      }
      console.log('Response:', response && response.statusCode);
      console.log('Body:', body);
    });
    return otp;
  }

  public static async verifyOTP(mobile: string, otp: string): Promise<boolean> {
    const user = await UserRepository.findByMobileAndOtp(mobile, otp);
    console.log(user)
    return !!user; // Returns true if user found with provided OTP, false otherwise
  }


  public static async loginByEmailAndPassword(email: string, password: string): Promise<any | null> {
    return UserRepository.findByEmailAndPassword(email, password);
  }

  public static async loginByMobileAndOTP(mobile: string, otp: string): Promise<any | null> {
    return UserRepository.findByMobileAndOtp(mobile, otp);
  }

  public static async deleteAccount(id: number): Promise<any | null> {
    return UserRepository.deleteAccount(id);
  }


  static async getAllUsers(): Promise<any> {
    try {
        const allusers = await UserRepository.getAllUsers();
        return allusers;
    } catch (error) {
        throw new Error('Could not get users');
    }
}


}

