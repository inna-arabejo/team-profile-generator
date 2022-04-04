const Manager = require('../lib/Manager');

test('create an Manager object', () => {
  const manager = new Manager('Kyle', 4, 'kyle@mailto.com');

  expect(manager.name).toEqual('Kyle');
  expect(manager.id).toEqual('4');
  expect(manager.email).toEqual('kyle@mailto.com');
  expect(manager.officeNum).toEqual('GH1');
});