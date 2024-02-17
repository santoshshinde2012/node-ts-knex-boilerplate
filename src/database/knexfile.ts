import path from 'path';
import { Knex } from 'knex';
import * as config from '../config';

export const development: Knex.Config = {
    client: 'mysql',
    connection: config.connection(),
    pool: {
        min: 1,
        max: 10,
    },
    migrations: {
        directory: path.join(__dirname, './migrations'),
        tableName: 'knex_migrations',
        extension: 'ts',
        loadExtensions: ['.ts'],
    },
    seeds: {
        directory: './seeds/development',
        loadExtensions: ['.ts'],
    },
};

export const production: Knex.Config = {
    ...development,
    migrations: {
        directory: path.join(__dirname, './migrations'),
        tableName: 'knex_migrations',
        loadExtensions: ['.js'],
    },
    seeds: {
        directory: './seeds/development',
        loadExtensions: ['.js'],
    },
};
