// controllers/contactController.ts

import { Request, Response } from 'express';
import {VastuAstrologerService}  from '../services/vastuAstrologerService';
export class VastuAstrologerController {
    static async createVastuAstrologer(req: Request, res: Response): Promise<void> {
        try {
            const quote = await VastuAstrologerService.createVastuAstrologer(req.body);
            if (quote) {
                res.json({ message: 'Submit successful', quote });
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

    static async getAllVastuAstrologer(req: Request, res: Response): Promise<void> {
        try {
            const contacts = await VastuAstrologerService.getAllVastuAstrologer();
            res.status(200).json(contacts);
        } catch (error) {
            res.status(500).send('Server error');
        }
    }
}
