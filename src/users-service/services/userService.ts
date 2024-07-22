import { UserRepository } from "../repo/userRepository";
import otpGenerator from 'otp-generator';
import msg91 from "msg91";
// import twilio from 'twilio';
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

    // In a real-world scenario, send the OTP via email or SMS 
    // const accountSid = process.env.TWILIO_ACCOUNT_SID;
    // const authToken = process.env.TWILIO_AUTH_TOKEN;

    // var options = {
    //   method: 'GET',
    //   url: 'https://api.authkey.io/request',
    //   qs:
    //   {
    //     authkey: '313935AIdapokF4I715e2484b4P1',
    //     sms: `Your OTP is: ${otp}`,
    //     mobile: '9990820210',
    //     country_code: '91',
    //     sender: '7060532399'
    //   },
    // };

    // require("request")(options, function (error: string | undefined, response: any, body: any) {
    //   if (error) throw new Error(error);
    //   console.log(body);
    // });
    msg91.initialize({ authKey: "313935AIdapokF4I715e2484b4P1" });
    let otpMsg = msg91.getOTP("660010aad6fc056cdc774262", { length: 6 });
    console.log(otpMsg)
    // Send OTP
    otpMsg.send("+917060532399");

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

  public static async deleteAccount(id: number, data: any): Promise<any | null> {
    return UserRepository.deleteAccount(id, data);
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

