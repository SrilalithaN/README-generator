const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the title of the Project(required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for the project to proceed!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of the project(Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a brief description of project to proceed!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "installation",
    message: "Please describe the installation if any",
  },

  {
    type: "input",
    name: "usage",
    message: "How do you use this project?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the usage of the Project to proceed!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Please provide guidelines for other developers to contribute to this project?",
  },

  {
    type: "input",
    name: "tests",
    message: "Please provide the test instructions if any ",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license for this project",
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
  },
  {
    type: "input",
    name: "github",
    messsage: "Please enter yout Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("You have successfully created a README file!")
  );
}

function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
