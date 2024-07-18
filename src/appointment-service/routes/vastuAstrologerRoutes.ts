import express from 'express';
import { VastuAstrologerController } from '../controllers/vastuAstrologerController';
const router = express.Router();
router.post('/', VastuAstrologerController.createVastuAstrologer);
// router.get('/:id', QuestionController.getContact);
// router.put('/:id', QuestionController.updateContact);
// router.delete('/:id', QuestionController.deleteContact);
router.get('/all', VastuAstrologerController.getAllVastuAstrologer);
export default router;