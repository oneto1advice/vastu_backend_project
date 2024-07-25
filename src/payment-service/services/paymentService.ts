// services/contactService.ts


import Razorpay from 'razorpay';
import  {PaymentRepository}  from '../repo/paymentRepository';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.payment-service' });


export class PaymentService {
  static razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID as string,
    key_secret: process.env.RAZORPAY_KEY_SECRET as string,
  });  

    static async createOrder(data: any): Promise<any> {

      console.log("Sunder", data)
        try {
          const options = {
            amount: data.amount * 100,
            currency: data.currency,
            receipt: "receipt"+data.userId
          };
        const order =  await this.razorpay.orders.create(options);
        const payment = await PaymentRepository.createOrder({
          userId: data.userId,
          consultantId: data.consultantId,
          amount: data.amount,
          currency: data.currency,
          status: 'created',
          razorpay_order_id: order.id,
        });
        return payment;
        } catch (error) {
            throw new Error('Could not create order');
        }
    }

    static async verifyPayment(razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string): Promise<any> {
        try {
          const payment = await PaymentRepository.verifyPayment(razorpay_order_id, razorpay_payment_id, razorpay_signature);
          return payment;
        } catch (error) {
          throw new Error('Could not save payment');
        }
      }

    

    static async updatePaymentStatus(razorpay_order_id: string, status: string): Promise<void> {
        try {
          console.log(`Updating payment status for order: ${razorpay_order_id} to status: ${status}`);
          const payment = await PaymentRepository.updatePaymentStatus(razorpay_order_id, { status });
          console.log('Updated payment:', payment);

          return payment;
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
