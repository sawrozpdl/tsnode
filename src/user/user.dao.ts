import knex from '../utils/dbase';

export function addUser(userObj: object): any {
    return knex("users").insert(userObj);
}