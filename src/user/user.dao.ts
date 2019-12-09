import knex from '../utils/dbase';

export async function addUser(userObj: object) {
    let hasBeenAdded;
    await knex("users").insert(userObj)
        .then((success) => {
            hasBeenAdded = true
        })
        .catch((error) => {
            hasBeenAdded = false
        });
    return await hasBeenAdded;
}