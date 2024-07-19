import { Request, Response } from 'express';
import { UserService } from '../services/userService';



// export async function loginUserByEmailAndPassword(req: Request, res: Response) {
//   const { email, password } = req.body;
//   try {
//     const user = await userService.loginUserByEmailAndPassword(email, password);
//     if (user) {
//       res.status(200).json({data: user});
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// }

// export async function loginUserByMobileAndOTP(req: Request, res: Response) {
//     const { mobile, otp } = req.body;
//     try {
//       const user = await userService.loginUserByMobileAndOTP(mobile, otp);
//       if (user) {
//         res.json(user);
//       } else {
//         res.status(401).json({ message: 'Invalid mobile or OTP' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error });
//     }
//   }


  export async function registerUser(req: Request, res: Response) : Promise<void> {
    try {
      const newUser = await UserService.registerUser(req.body);
      console.log(newUser)
      res.status(200).json(newUser);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  export  async function sendOTPController(req: Request, res: Response): Promise<void> {
    const { emailOrMobile } = req.body;
  
    try {
      const otp = await UserService.sendOTP(emailOrMobile);
      res.status(200).json({ message: 'OTP sent successfully.', otp });
    } catch (error) {
      console.error('Error sending OTP:', error);
      res.status(500).json({ error: 'Failed to send OTP.' });
    }
  }


  export async function loginByEmailAndPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await UserService.loginByEmailAndPassword(email, password);
      if (user) {
        res.json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  export async function loginByMobileAndOTP(req: Request, res: Response): Promise<void> {
    try {
      const { mobile, otp } = req.body;
      const user = await UserService.loginByMobileAndOTP(mobile, otp);
      if (user) {
        res.json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid mobile or OTP' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  export async function verifyOTP(req: Request, res: Response): Promise<void> {
    try {
      const { mobile, otp } = req.body;
      const isVerified = await UserService.verifyOTP(mobile, otp);
      if (isVerified) {
        res.json({ message: 'OTP verification successful' });
      } else {
        res.status(401).json({ message: 'OTP verification failed' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }


  
  
  
