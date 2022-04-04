const Employee = require('../lib/Employee');

describe("Team", () => {
  test("create an Employee object", () => {
    const employee = new Employee('Carl', 1, 'carl@mailto.com');
    
    it("Returns the name of employee", () => {
      expect(employee.getName()).toEqual('Carl');
    });

    it("Returns the id of employee", () => {
      expect(employee.getId()).toEqual('1');
    });

    it("Returns the email of employee", () => {
      expect(employee.getEmail()).toEqual('carl@mailto.com');
    });

    it("Returns the role of employee", () => {
      expect(employee.getRole()).toEqual('manager');
    });

  });
});

















