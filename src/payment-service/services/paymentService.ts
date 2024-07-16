// services/contactService.ts

import Razorpay from 'razorpay';
import  {PaymentRepository}  from '../repo/paymentRepository';

export class PaymentService {
  static razorpay = new Razorpay({
    key_id: 'rzp_test_ru9JhDbASvbpJZ',
    key_secret: 'HlpXqwhvbh4g9BtWfUWFLJRZ',
  });  


    //  static razorpay = new Razorpay({
    //     key_id: process.env.RAZORPAY_KEY_ID!,
    //     key_secret: process.env.RAZORPAY_KEY_SECRET!,
    //   });  


    static async createOrder(data: any): Promise<any> {
        try {
          const options = {
            amount: data.amount * 100, // converting to smallest currency unit
            currency: data.currency,
            receipt: data.userId,
          };
            const contact = await this.razorpay.orders.create(options);
            return contact;
        } catch (error) {
            throw new Error('Could not create order');
        }
    }

    static async savePayment(paymentData: any): Promise<any> {
        try {
          const payment = await PaymentRepository.createOrder(paymentData);
          return payment;
        } catch (error) {
          throw new Error('Could not save payment');
        }
      }

    static async updatePaymentStatus(payment_id: string, status: string): Promise<void> {
        try {
          await PaymentRepository.updatePaymentStatus(payment_id, status);
        } catch (error) {
          throw new Error('Could not update payment status');
        }
      }


   

    // static async getContact(id: number): Promise<any> {
    //     try {
    //         const contact = await ContactRepository.getContact(id);
    //         if (!contact) throw new Error('Contact not found');
    //         return contact;
    //     } catch (error) {
    //         throw new Error('Could not get contact');
    //     }
    // }

    // static async updateContact(id: number, data: any): Promise<any> {
    //     try {
    //         const [rowsUpdated, [updatedContact]] = await ContactRepository.updateContact(id, data);
    //         if (rowsUpdated === 0) throw new Error('Contact not found');
    //         return updatedContact;
    //     } catch (error) {
    //         throw new Error('Could not update contact');
    //     }
    // }

    // static async deleteContact(id: number): Promise<any> {
    //     try {
    //         const rowsDeleted = await ContactRepository.deleteContact(id);
    //         if (rowsDeleted === 0) throw new Error('Contact not found');
    //         return { message: 'Contact deleted successfully' };
    //     } catch (error) {
    //         throw new Error('Could not delete contact');
    //     }
    // }

    // static async getAllContacts(): Promise<any> {
    //     try {
    //         const contacts = await ContactRepository.getAllContacts();
    //         return contacts;
    //     } catch (error) {
    //         throw new Error('Could not get contacts');
    //     }
    // }
}
