// controllers/contactController.ts

import { Request, Response } from 'express';
import {NotificationService}  from '../services/notificationService';

export class NotificationController {
    static async createNotifications(req: Request, res: Response): Promise<void> {
        try {
            const notification = await NotificationService.createNotifications(req.body);
            if (notification) {
                res.json({ message: 'Submit successful', notification });
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

    static async getAllNotifications(req: Request, res: Response): Promise<void> {
        try {
            const notifications = await NotificationService.getAllNotifications();
            res.status(200).json(notifications);
        } catch (error) {
            res.status(500).send('Server error');
        }
    }
}
