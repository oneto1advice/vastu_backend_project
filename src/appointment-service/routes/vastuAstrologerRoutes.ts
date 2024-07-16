import express from 'express';
import { VastuAstrologerController } from '../controllers/vastuAstrologerController';
const router = express.Router();
router.post('/', VastuAstrologerController.createContact);
// router.get('/:id', QuestionController.getContact);
// router.put('/:id', QuestionController.updateContact);
// router.delete('/:id', QuestionController.deleteContact);
// router.get('/', QuestionController.getAllContacts);
export default router;