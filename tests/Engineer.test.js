const Engineer = require('../lib/Engineer');

describe("Engineer profile", () => {
  test("create a Engineer object", () => {
    const engineer = new Engineer("Inna", "2", "iarabejo3@gmail.com", "inna-arabejo");
    
    it("Returns the name of employee", () => {
      expect(engineer.getName()).toEqual("Inna");
    });

    it("Returns the id of employee", () => {
      expect(engineer.getId()).toEqual("2");
    });

    it("Returns the email of employee", () => {
      expect(engineer.getEmail()).toEqual("iarabejo3@gmail.com");
    });

    it("Returns the github of employee", () => {
      expect(engineer.getGitHub()).toEqual("inna-arabejo");
    });

    it("Returns the role of employee", () => {
      expect(engineer.getRole()).toEqual("engineer");
    });

  });
});

