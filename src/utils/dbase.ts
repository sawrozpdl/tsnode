import * as knex from 'knex';
let knexConfig = require('../knexConfig');

export default knex(knexConfig['development']);