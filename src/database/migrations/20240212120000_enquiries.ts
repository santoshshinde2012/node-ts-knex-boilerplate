import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
    CREATE TABLE IF NOT EXISTS enquiries (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        first_name text NOT NULL,
        last_name text NOT NULL,
        email text NOT NULL,
        subject text NOT NULL,
        message text NOT NULL,
        phone INTEGER NOT NULL,
        created_at timestamp NOT NULL DEFAULT NOW()
    );
`);
}

export async function down(knex: Knex): Promise<void> {
    await knex.raw(`DROP TABLE IF EXISTS enquiries`);
}
