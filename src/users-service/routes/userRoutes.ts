import express from 'express';
import {  registerUser, sendOTPController, loginByEmailAndPassword,verifyOTP, loginByMobileAndOTP, deleteAccount, getAllUsers } from '../controllers/userController';
const router = express.Router();
router.post('/login/email', loginByEmailAndPassword);
router.post('/login/mobile', loginByMobileAndOTP);
router.post('/register', registerUser);
router.post('/send-otp', sendOTPController);
router.post('/verify-otp', verifyOTP);
router.get('/all', getAllUsers);
router.put('/deleteAccount/:id', deleteAccount);

export default router;