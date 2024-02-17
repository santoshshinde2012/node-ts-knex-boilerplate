import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('enquiries').del();

  // Insert seed entries
  await knex('enquiries').insert([
    {
      first_name: 'Santosh',
      last_name: 'Shinde',
      email: 'sanshinde2012@gmail.com',
      subject: 'Enquiry',
      message: 'Dummy Enquiry',
      phone: '0000000000'
    }
  ]);
}