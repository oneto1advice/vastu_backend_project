// controllers/contactController.ts

import { Request, Response } from 'express';
import {QuestionService}  from '../services/questionService';

export class QuestionController {
    static async createContact(req: Request, res: Response): Promise<void> {
        try {
            const question = await QuestionService.createContact(req.body);
            if (question) {
                res.json({ message: 'Submit successful', question });
              } else {
                res.status(401).json({ message: 'Invalid details' });
              }
        } catch (error) {
            res.status(500).send('Server error');
        }
    }

    // static async getContact(req: Request, res: Response): Promise<void> {
    //     try {
    //         const { id } = req.params;
    //         const contact = await ContactService.getContact(parseInt(id));
    //         res.status(200).json(contact);
    //     } catch (error) {
    //         res.status(404).send('Contact not found');
    //     }
    // }

    // static async updateContact(req: Request, res: Response): Promise<void> {
    //     try {
    //         const { id } = req.params;
    //         const contact = await ContactService.updateContact(parseInt(id), req.body);
    //         res.status(200).json(contact);
    //     } catch (error) {
    //         res.status(404).send('Contact not found');
    //     }
    // }

    // static async deleteContact(req: Request, res: Response): Promise<void> {
    //     try {
    //         const { id } = req.params;
    //         await ContactService.deleteContact(parseInt(id));
    //         res.status(204).end();
    //     } catch (error) {
    //         res.status(404).send('Contact not found');
    //     }
    // }

    static async getAllQuestions(req: Request, res: Response): Promise<void> {
        try {
            const contacts = await QuestionService.getAllQuestions();
            res.status(200).json(contacts);
        } catch (error) {
            res.status(500).send('Server error');
        }
    }
}
