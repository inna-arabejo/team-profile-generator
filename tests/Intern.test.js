const Intern = require('../lib/Intern');

describe("Intern profile", () => {
  test("create an Intern object", () => {
    const intern = new Intern("Ryan", "3", "ryan@mailto.com", "SMU");
    
    it("Returns the name of employee", () => {
      expect(intern.getName()).toEqual("Ryan");
    });

    it("Returns the id of employee", () => {
      expect(intern.getId()).toEqual("3");
    });

    it("Returns the email of employee", () => {
      expect(intern.getEmail()).toEqual("ryan@mailto.com");
    });

    it("Returns the school of employee", () => {
      expect(intern.getSchool()).toEqual("SMU");
    });

    it("Returns the role of employee", () => {
      expect(intern.getRole()).toEqual("intern");
    });

  });
});

