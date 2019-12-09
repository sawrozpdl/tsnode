import {addUser, removeUser, getAllUsers, getUser, updateUser} from '../src/user/user.dao';

test('add user', async () => {
    expect(await addUser({
        id : 2,
        name : 'saroj',
        age : 19
    })).resolves;
});

test('remove user', async () => {
    expect(await removeUser({
        id : 2,
        name : 'saroj',
        age : 19
    })).resolves;
});

test('get all users', async () => {
    await addUser({
        id : 3,
        name : 'saroj',
        age : 19
    });
    await addUser({
        id : 4,
        name : 'saroj',
        age : 19
    });
    let users = await getAllUsers();
    expect(users[0].id + users[1].id).toBe(7);
});

test('get user', async () => {
    let user = await getUser({
        id : 3
    });
    expect(user[0]).toEqual({
        id : 3,
        name : 'saroj',
        age : 19
    });
});

test('update user', async () => {
    expect(await updateUser({
        id : 2,
        name : 'saroj',
        age : 20
    })).resolves;
});
