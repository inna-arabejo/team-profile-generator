const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./lib/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const inquire = () => {
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

  ]).then()
}