import express from 'express';
import { NotificationController } from '../controllers/notificationController';
const router = express.Router();
router.post('/', NotificationController.createNotifications);
// router.get('/:id', QuestionController.getContact);
// router.put('/:id', QuestionController.updateContact);
// router.delete('/:id', QuestionController.deleteContact);
 router.get('/all', NotificationController.getAllNotifications);
export default router;