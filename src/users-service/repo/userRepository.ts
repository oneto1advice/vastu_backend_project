import User from "../models/user";
import { Op } from 'sequelize';

export class UserRepository {

  static async createUser(data: any): Promise<any> {
    try {
      const user = await User.create(data);
      return { exists: false, message: "New user created successfully.", status: "success", data: user };
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }


 static async checkEmailOrMobileExists(email: any, mobile: any) {
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { email: email },
          { mobile: mobile }
        ]
      }
    });
    
    const exists = !!existingUser;
    const message = "Email or mobile already exists.";
    const status = "error";

    return { exists, message, status, data: {} };
  }


 static async updateUserOTP(emailOrMobile: any, otp: any) {
    return await User.update({ otp }, { where: { [Op.or]: [{ email: emailOrMobile }, { mobile: emailOrMobile }] } });
  }
  
  static async findUserByEmailOrMobile(emailOrMobile: any) {
    return await User.findOne({ where: { [Op.or]: [{ email: emailOrMobile }, { mobile: emailOrMobile }] } });
  }

  public static async findByEmailAndPassword(email: string, password: string): Promise<any | null> {
    return await User.findOne({ where: { email, password } });
  }

  public static async findByMobileAndOtp(mobile: string, otp: string): Promise<any | null> {
    return await User.findOne({ where: { mobile, otp } });
  }

  public static async deleteAccount(id: number): Promise<any | null> {
    var value = "";
    var user = await User.findOne({ where: { id } });
     if(user?.dataValues.status === 2){
       value = "No data found";
     }else {
      await User.update({"status": 2},{ where: { id } });
      value = "Delete Account Successfully";
     }
     return value;
  }

  static async getAllUsers(): Promise<any[]> {
    return await User.findAll();
}
}