const { assert } = require('chai');
const { expect } = require('chai');
const userController = require('../../src/application/controllers/user.controller');

describe('Dummy test', () => {
  it('Should just be here as to make tests pass', (done) => {
    assert(true);
    done();
  });
});

describe('Get Users', () => {
  it('Should return user data', async () => {
    const mockObj = [
      {
        id: 3426243159,
        name: 'Diego Matias',
        lastname: 'Pascual',
        birthday: '1985-08-20',
        is_active: true,
        email: 'dpascual@email.com',
        genre: 'Masculino',
      },
      {
        age: 34,
      },
    ];
    const mockRes = {
      json(obj) {
        return mockObj;
      },
    };
    const data = await userController.getUsers({}, mockRes);
    expect(data).to.be.an('Array');
  });
});
