const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./lib/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { off } = require('process');

const team = [];

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

  ]).then(managerInfo => {
    const { name, id, email, officeNum } = managerInfo;
    const manager = new Manager (name, id, email, officeNum);

    team.push(manager);
    console.log(manager);
  })
};


const inquireEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Which team member would you like to add?",
      name: "role",
      choices: ["Engineer", "Intern", "No more team members to add."]
    },
    {
      type: "input",
      message: "What is the member's name?",
      name: "memberName",
    },

    {
      type: "input",
      message: "What is the member's id?",
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
      message: "What is the member's email?",
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
      message: "What is the member's github?",
      name: "github",
      when: (input) => input.role === "Engineer",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Invalid github input. Please try again.")
          return false;
        }
      }
    },

    {
      type: "input",
      message: "Where did the member attend school?",
      name: "school",
      when: (input) => input.role === "Intern",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Invalid github input. Please try again.")
          return false;
        }
      }
    }

  ])
}

