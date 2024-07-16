import express from 'express';
import { QuoteController } from '../controllers/quoteController';
const router = express.Router();
router.post('/', QuoteController.createContact);
// router.get('/:id', QuestionController.getContact);
// router.put('/:id', QuestionController.updateContact);
// router.delete('/:id', QuestionController.deleteContact);
// router.get('/', QuestionController.getAllContacts);
export default router;