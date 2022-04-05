const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const DIST_DIR = path.resolve(__dirname, 'dist');
// const distPath = path.join(DIST_DIR, 'index.html');
const createHTML = require('./src/createHTML');

const teamArray = [];

const inquireManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the manager's name?",
      name: "name"
    },

    {
      type: "input",
      message: "What is the manager's id?",
      name: "id",
      validate: idInput => {
        if (isNaN(idInput)) {
          console.log("Invalid ID input. Please try again.")
          return false;
        } else {
          return true;
        }
      }
    },

    {
      type: "input",
      message: "What is the manager's email?",
      name: "email",
      validate: emailInput => {
        valid = /@/.test(emailInput)
        if (valid) {
          return true;
        } else {
          console.log("Invalid email input. Please try again.")
          return false;
        }
      }
    },

    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNum"
    },

  ]).then(data => {
    if(data.role === "manager") {
    const manager = new Manager (data.name, data.id, data.email, data.officeNum);
    teamArray.push(manager);

    }
  })
};


const inquireEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Which team member would you like to add?",
      name: "role",
      choices: ["Engineer", "Intern"]
    },

    {
      type: "input",
      message: "What is the employee's name?",
      name: "name",
    },

    {
      type: "input",
      message: "What is the member's id?",
      name: "id",
      validate: idInput => {
        if (isNaN(idInput)) {
          console.log(" Invalid ID input. Please try again.")
          return false;
        } else {
          return true;
        }
      }
    },

    {
      type: "input",
      message: "What is the member's email?",
      name: "email",
      validate: emailInput => {
        valid = /@/.test(emailInput)
        if (valid) {
          return true;
        } else {
          console.log(" Invalid email input. Please try again.")
          return false;
        }
      }
    },

    {
      type: "input",
      message: "What is the member's github?",
      name: "github",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(" Invalid github input. Please try again.")
        }
      }
    },

    {
      type: "input",
      message: "Where did the member attend school?",
      name: "school",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(" Invalid github input. Please try again.")
        }
      }
    },

    {
      type: "confirm",
      message: "Would you like to add another team member?",
      name: "addAnother",
      default: false
    }
   
  ]).then(memberData => {

    const { name, id, email, role, github, school, addAnother } = memberData;
    let teamMember;

    if (role === "Engineer") {
      teamMember = new Engineer(name, id, email, github);

    } else if (role === "Intern") {
      teamMember = new Intern(name, id, email, school);
    }

    teamArray.push(teamMember);
    
    if (addAnother) {
      return inquireEmployee(teamArray);
    } else {
      return teamArray;
    }
  })
};

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if(err) {
      console.log("Please be sure to answer all questions.")
      return
    } else {
      console.log("You have successfully created your team profile.")
    }
  })
}



inquireManager()
  .then(inquireEmployee)
  .then(teamArray => {
    return createHTML(teamArray);
  }).then(profileHTML => {
    return writeFile(profileHTML);
  }).catch(err => {
  console.log(err);
  });

