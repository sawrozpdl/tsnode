import knex from '../utils/dbase';

export function addUser(userObj: object): any {
    return knex("users").insert(userObj);
}

export function removeUser(userObj: object):any {
    return knex('users').where(userObj).del();
}

export function updateUser<T extends {id: number}>(userObj: T):any {
    return knex('users').where({
        id : userObj.id
    }).update(userObj)
}

export function getUser<T extends {id: number}>(userObj: T):any {
    return knex('users').select('*').where({
        id : userObj.id
    });
}

export function getAllUsers(): any {
    return knex('users').select('*');
}