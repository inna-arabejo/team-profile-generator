const Manager = require('../lib/Manager');


test("Returns the office number of manager", () => {
  const manager = new Manager("Kyle", "4", "kyle@mailto.com", "HH1");
  expect(manager.getOfficeNum()).toEqual("HH1");
});

test("Returns the role of manager", () => {
  const returnVal = "Manager";
  const manager = new Manager("Kyle", "4", "kyle@mailto.com", "HH1");
  expect(manager.getRole()).toEqual(returnVal);
});
