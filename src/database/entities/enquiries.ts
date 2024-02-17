import { Knex } from 'knex';

export type DbEnquiry = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    subject: string;
    message: string;
    phone: number;
    created_at: Date;
};

export type DbEnquiryIn = Pick<
    DbEnquiry,
    | 'first_name'
    | 'last_name'
    | 'email'
    | 'subject'
    | 'message'
    | 'phone'
> &
    Partial<Pick<DbEnquiry, 'id'>>;
export type DbEnquiryUpdate = Partial<
    Pick<
        DbEnquiry,
        | 'email'
        | 'first_name'
        | 'last_name'
        | 'subject'
        | 'message'
        | 'phone'
    >
>;

export type EnquiriesTable = Knex.CompositeTableType<DbEnquiry, DbEnquiryIn, DbEnquiryUpdate>;

export const EnquiriesTableName = 'enquiries';
