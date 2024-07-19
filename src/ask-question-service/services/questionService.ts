// services/contactService.ts

import  {QuestionRepository}  from '../repo/questionRepository';

export class QuestionService {
    static async createContact(data: any): Promise<any> {
        try {
            const contact = await QuestionRepository.createContact(data);
            return contact;
        } catch (error) {
            throw new Error('Could not create question');
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

    static async getAllQuestions(): Promise<any> {
        try {
            const contacts = await QuestionRepository.getAllQuestions();
            return contacts;
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }
}
