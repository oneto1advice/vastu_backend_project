// repositories/contactRepository.ts

import Notification from '../models/notification';

export class NotificationRepository {
    static async createNotifications(data: any): Promise<any> {
        try {
            const notification = await Notification.create(data);
            return { exists: false, message: "Submit successfully.", status: "success", data: notification };
        } catch (error) {
            console.error('Error creating notification:', error);
            throw error;
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

    static async getAllNotifications(): Promise<any[]> {
        return await Notification.findAll();
    }
}
