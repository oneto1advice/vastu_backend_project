import express from 'express';
import { QuestionController } from '../controllers/questionController';
const router = express.Router();
router.post('/', QuestionController.createQuestions);
// router.get('/:id', QuestionController.getContact);
// router.put('/:id', QuestionController.updateContact);
// router.delete('/:id', QuestionController.deleteContact);
 router.get('/all', QuestionController.getAllQuestions);
export default router;