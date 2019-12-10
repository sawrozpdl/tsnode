import User from '../src/models/User';


test('model-test', () => {
    let user = new User();
    user.create();

    expect(user.toString()).toEqual('string');
})
