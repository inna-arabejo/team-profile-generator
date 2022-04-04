const Manager = require('../lib/Manager');

describe("Manager profile", () => {
  test("create a Manager object", () => {
    const manager = new Manager("Kyle", "4", "kyle@mailto.com", "HH1");
    
    it("Returns the name of employee", () => {
      expect(manager.getName()).toEqual("Kyle");
    });

    it("Returns the id of employee", () => {
      expect(manager.getId()).toEqual("4");
    });

    it("Returns the email of employee", () => {
      expect(manager.getEmail()).toEqual("kyle@mailto.com");
    });

    it("Returns the office number of employee", () => {
      expect(manager.getOfficeNum()).toEqual("HH1");
    });

    it("Returns the role of employee", () => {
      expect(manager.getRole()).toEqual("manager");
    });

  });
});

