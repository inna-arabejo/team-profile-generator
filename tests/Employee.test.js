const Employee = require('../lib/Employee');

// describe("Team", () => {
// });


test("create an Employee object", () => {
  const employee = new Employee("Carl", "1", "carl@mailto.com");
  expect(typeof(employee)).toEqual("object");
});
  
test("Returns the name of employee", () => {
  const employee = new Employee("Carl", "1", "carl@mailto.com");
  expect(employee.getName()).toEqual("Carl");
});

test("Returns the id of employee", () => {
  const employee = new Employee("Carl", "1", "carl@mailto.com");
  expect(employee.getId()).toEqual("1");
});

test("Returns the email of employee", () => {
  const employee = new Employee("Carl", "1", "carl@mailto.com");
  expect(employee.getEmail()).toEqual("carl@mailto.com");
});

test("Returns the role of employee", () => {
  const returnVal = "Employee";
  const employee = new Employee("Carl", "1", "carl@mailto.com");
  expect(employee.getRole()).toEqual(returnVal);
});
















