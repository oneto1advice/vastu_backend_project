// services/contactService.ts

import  {NotificationRepository}  from '../repo/notificationRepository';

export class NotificationService {
    static async createNotifications(data: any): Promise<any> {
        try {
            const notification = await NotificationRepository.createNotifications(data);
            return notification;
        } catch (error) {
            throw new Error('Could not create notification');
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

    static async getAllNotifications(): Promise<any> {
        try {
            const notifications = await NotificationRepository.getAllNotifications();
            return notifications;
        } catch (error) {
            throw new Error('Could not get notification');
        }
    }
}
