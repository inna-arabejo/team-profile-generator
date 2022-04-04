const Engineer = require('../lib/Engineer');

test('create an Engineer object', () => {
  const engineer = new Engineer('Inna', 2, 'iarabejo3@gmail.com', 'inna-arabejo');

  expect(engineer.name).toEqual('Inna');
  expect(engineer.id).toEqual('2');
  expect(engineer.email).toEqual('iarabejo3@gmail.com');
  expect(engineer.github).toEqual('inna-arabejo');
});