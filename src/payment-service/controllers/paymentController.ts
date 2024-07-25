// controllers/contactController.ts

import { Request, Response } from 'express';
import { PaymentService } from '../services/paymentService';
import { promises } from 'dns';

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


  static async verifyPayment(req: Request, res: Response): Promise<void> {
   
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

      const paymentData = await PaymentService.verifyPayment(razorpay_order_id, razorpay_payment_id, razorpay_signature);
      res.status(200).json({ status: 'ok', paymentData });
    } catch (error: any) {
      res.status(400).json({ status: 'error', message: error.message });
    }
  };

 
  static async updatePaymentStatusController(req: Request, res: Response): Promise<any> {
    try {
      const { razorpay_order_id, status } = req.body;
      console.log(`Received request to update status: ${status} for order: ${razorpay_order_id}`);

      const payment = await PaymentService.updatePaymentStatus(razorpay_order_id, status);
      console.log('Payment updated successfully:', payment);

      res.json(payment);
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
