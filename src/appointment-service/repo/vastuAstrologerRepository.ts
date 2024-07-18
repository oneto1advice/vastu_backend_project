// repositories/contactRepository.ts

import VastuAstrologer from '../models/vastuAstrologer';

export class VastuAstrologerRepository {
    static async createVastuAstrologer(data: any): Promise<any> {
        try {
            const vastuAstrogler = await VastuAstrologer.create(data);
            return { exists: false, message: "Submit successfully.", status: "success", data: vastuAstrogler };
        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
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

    static async getAllVastuAstrologer(): Promise<any[]> {
        return await VastuAstrologer.findAll();
    }
}
