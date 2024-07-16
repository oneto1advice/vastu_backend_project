// repositories/contactRepository.ts

import Quote from '../models/quote';

export class QuoteRepository {
    static async createContact(data: any): Promise<any> {
        try {
            const quote = await Quote.create(data);
            return { exists: false, message: "Submit successfully.", status: "success", data: quote };
        } catch (error) {
            console.error('Error creating question:', error);
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

    // static async getAllContacts(): Promise<any[]> {
    //     return await Contact.findAll();
    // }
}
