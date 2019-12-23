import User from '../src/models/User';


test('model-test', () => {
    let user = new User();
    user.createTable();
    expect(user.toString()).toEqual('string');
})
