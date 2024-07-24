import express from 'express';
import { PaymentController } from '../controllers/paymentController';
const router = express.Router();
router.post('/create-order', PaymentController.createOrder);
router.post('/verify-payment', PaymentController.verifyPayment);
router.post('/update-payment-status', PaymentController.updatePaymentStatusController)
// router.post('/webhook', PaymentController.handleWebhook);
// router.get('/:id', QuestionController.getContact);
// router.put('/:id', QuestionController.updateContact);
// router.delete('/:id', QuestionController.deleteContact);
// router.get('/', QuestionController.getAllContacts);
export default router;