const Intern = require('../lib/Intern');

test('create an Intern object', () => {
  const intern = new Intern('Ryan', 3, 'ryan@mailto.com', 'SMU');

  expect(intern.name).toEqual('Ryan');
  expect(intern.id).toEqual('3');
  expect(intern.email).toEqual('ryan@mailto.com');
  expect(intern.school).toEqual('SMU');
});