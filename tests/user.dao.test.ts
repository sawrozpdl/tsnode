import { addUser } from '../src/user/user.dao';

test('add user', async () => {
    expect(await addUser({
        id : 2,
        name : 'saroj',
        age : 19
    })).toBe(true);
});