// repositories/contactRepository.ts

import Payment from '../models/payment';

export class PaymentRepository {
    static async createOrder(data: any): Promise<any> {
        try {
            const payment = await Payment.create(data);
            return {  message: "Submit successfully.", status: "success", data: payment };
        } catch (error) {
            console.error('Error creating payment:', error);
            throw error;
        }

    }

    static async updatePaymentStatus(payment_id: string, status: string): Promise<void> {
        const payment = await Payment.findOne({ where: { payment_id } });
        if (payment) {
          payment.status = status;
          await payment.save();
        } else {
          throw new Error('Payment not found');
        }
      }

    // static async getContact(id: number): Promise<any | null> {
    //     return await Contact.findByPk(id);
    // }

    // static async updateContact(id: number, data: any): Promise<[number, any[]]> {
    //     return await Contact.update(data, {
    //         where: { id },
    //     });
    // }

    // static async deleteContact(id: number): Promise<number> {
    //     return await Contact.destroy({
    //         where: { id },
    //     });
    // }

    // static async getAllContacts(): Promise<any[]> {
    //     return await Contact.findAll();
    // }
}
