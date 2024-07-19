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

  public static async deleteAccount(id: number, data: any): Promise<any | null> {
    var value = await User.update(data,{ where: { id } });
    console.log(value)
    return value;
  }







  // Method to retrieve a user by their email
  // async getUserByEmail(email: string): Promise<User | undefined> {
  //   // Your logic to retrieve the user data by email, e.g., from a database
  //   return this.users.find((user) => user.email === email); // For demonstration, we're searching in the array
  // }


  // Method to retrieve a user by their mobile
  // async getUserByMobile(mobile: string): Promise<User | undefined> {
  //   // Your logic to retrieve the user data by mobile, e.g., from a database
  //   return this.users.find((user) => user.mobile === mobile); // For demonstration, we're searching in the array
  // }

  // async updateUserOTP(user: User, otp: string): Promise<void> {
  //   user.otp = otp;
  //   // Update user in database
  // }

  // async clearUserOTP(user: User): Promise<void> {
  //   delete user.otp;
  //   // Update user in database
  // }


  // Method to update an existing user
  // async updateUser(user: User): Promise<User | null> {
  //   const index = this.users.findIndex((u) => u.id === user.id);
  //   if (index !== -1) {
  //     this.users[index] = user; // For demonstration, we're updating the user in the array
  //     return user;
  //   }
  //   return null;
  // }

  // Method to delete a user by their ID
  // async deleteUserById(id: number): Promise<boolean> {
  //   const initialLength = this.users.length;
  //   this.users = this.users.filter((user) => user.id !== id); // For demonstration, we're removing the user from the array
  //   return this.users.length !== initialLength; // Return true if user was deleted, false otherwise
  // }
}