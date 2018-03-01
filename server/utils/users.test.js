const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Mike',
        room: 'ST'
      },
      {
        id: '2',
        name: 'Jen',
        room: 'React'
      }
    ];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Damjan',
      room: 'QOTSA'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(1);
  });

  it('should not remove a user', () => {
    var userId = '22';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(2);
  });

  it('should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '255';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return names for band', () => {
    var userList = users.getUserList('ST');

    expect(userList).toEqual(['Mike']);
  });
});
