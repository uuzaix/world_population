const pgPromise = require('pg-promise');

const connStr = 'postgresql://ldol@localhost:5432/world';

const pgp = pgPromise({}); // empty pgPromise instance
const psql = pgp(connStr); // get connection to db instance

exports.psql = psql;