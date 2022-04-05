const Engineer = require('../lib/Engineer');


test("Returns the github of engineer", () => {
  const engineer = new Engineer("Inna", "2", "iarabejo3@gmail.com", "inna-arabejo"); 
  expect(engineer.getGitHub()).toEqual("inna-arabejo");
});

test("Returns the role of engineer", () => {
  const returnVal = "Engineer";
  const engineer = new Engineer("Inna", "2", "iarabejo3@gmail.com", "inna-arabejo");
  expect(engineer.getRole()).toEqual(returnVal);
});