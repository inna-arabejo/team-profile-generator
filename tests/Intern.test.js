const Intern = require('../lib/Intern');


test("Returns the school of intern", () => {
  const intern = new Intern("Ryan", "3", "ryan@mailto.com", "SMU");
  expect(intern.getSchool()).toEqual("SMU");
});

test("Returns the role of intern", () => {
  const returnVal = "Intern";
  const intern = new Intern("Ryan", "3", "ryan@mailto.com", "SMU");
  expect(intern.getRole()).toEqual(returnVal);
});

