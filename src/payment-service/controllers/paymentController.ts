// controllers/contactController.ts

import { Request, Response } from 'express';
import { PaymentService } from '../services/paymentService';

export class PaymentController {
    static async createOrder(req: Request, res: Response): Promise<void> {
        try {
            const payment = await PaymentService.createOrder(req.body);
            if (payment) {
                res.json({ message: 'Submit successful', payment });
            } else {
                res.status(401).json({ message: 'Invalid details' });
            }
        } catch (error) {
            res.status(500).send('Server error');
        }
    }


    static async savePayment(req: Request, res: Response): Promise<void> {
        try {
            const paymentData = req.body;
            const payment = await PaymentService.savePayment(paymentData);
            res.status(201).json(payment);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };

    static async handleWebhook(req: Request, res: Response): Promise<void> {
        try {
          const { event, payload } = req.body;
      
          if (event === 'payment.captured') {
            const paymentData = {
              payment_id: payload.payment.entity.id,
              status: 'captured',
            };
            await PaymentService.updatePaymentStatus(paymentData.payment_id, paymentData.status);
          }
      
          res.status(200).send('Webhook received');
        } catch (error: any) {
          res.status(500).json({ error: error.message });
        }
      };

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

    // static async getAllContacts(req: Request, res: Response): Promise<void> {
    //     try {
    //         const contacts = await ContactService.getAllContacts();
    //         res.status(200).json(contacts);
    //     } catch (error) {
    //         res.status(500).send('Server error');
    //     }
    // }
}
