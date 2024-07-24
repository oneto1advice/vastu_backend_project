// repositories/contactRepository.ts

import Payment from '../models/payment';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.payment-service' });

export class PaymentRepository {
 

  static async createOrder(data: any): Promise<any> {
    try {
     
      const payment = await Payment.create(data);
      return { message: "Submit successfully.", status: "success", data: payment };
    } catch (error) {
      console.error('Error creating payment:', error);
      throw error;
    }
  }

  static async getPaymentByOrderId(razorpay_order_id: string): Promise<any> {
    const payment = await Payment.findOne({ where: { razorpay_order_id } });
    return payment;
  };


  static async verifyPayment(razorpay_order_id: string, razorpay_payment_id: string, signature: string): Promise<any> {
    try {
      const generatedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET as string).update(razorpay_order_id + '|' + razorpay_payment_id).digest('hex');
      console.log('generatedSignature', generatedSignature)
      if (generatedSignature === signature) {
        const payment = await this.getPaymentByOrderId(razorpay_order_id);
        if (payment) {
          payment.razorpay_payment_id = razorpay_payment_id;
          payment.status = 'success';
          await payment.save();
          return { message: "Payment verified successfully", status: "success", data: payment };
        }
      } else {
        return { message: "Payment verification failed", status: "success" };
      }
    } catch (error) {
      console.error('Error creating payment:', error);
      throw error;
    }

  }


  static async updatePaymentStatus(razorpay_order_id: string, paymentData: any): Promise<any> {
    const payment = await this.getPaymentByOrderId(razorpay_order_id);
    if (payment) {
      Object.assign(payment, paymentData);
      await payment.save();
      return payment;
    } else {
      throw new Error('Payment not found');
    }
  }

  // export const updatePayment = async (orderId: string, paymentData: Partial<Payment>) => {
  //   const payment = await getPaymentByOrderId(orderId);
  //   if (payment) {
  //     Object.assign(payment, paymentData);
  //     await payment.save();
  //     return payment;
  //   }
  //   throw new Error('Payment not found');
  // };

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
