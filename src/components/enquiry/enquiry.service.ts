import { EnquiriesTableName } from "../../database/entities/enquiries";
import { IEnquiry } from "./enquiry.types";
import database from "../../database";

export class EnquiryService {

    async getAll(): Promise<IEnquiry[]> {
        const enquiries = await
            database(EnquiriesTableName)
                .select('*');
        return enquiries;
    }

    async getById(id: string | number): Promise<IEnquiry> {
        const enquiry = await
            database(EnquiriesTableName)
                .where({ id })
                .first()
                .then((row) => row);
        return enquiry;
    }

    async update(id: string | number, data: IEnquiry): Promise<number> {
        const enquiry = await database(EnquiriesTableName)
            .update(data)
            .where('id', id)
        return enquiry;
    }

    async create(data: IEnquiry): Promise<number> {
        const [enquiry] = await database(EnquiriesTableName)
            .insert(data)
        return enquiry;
    }

    async delete(id: string | number): Promise<number> {
        const enquiry = await database(EnquiriesTableName)
            .del()
            .where('id', id)
        return enquiry;
    }
}
