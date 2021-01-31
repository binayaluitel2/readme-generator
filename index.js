const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown.js");

// List of questions to prompt users for appropriate responses
const questions = [
  {
    type: "input",
    name: "Description",
    message: "Please enter description of your project:",
  },
  {
    type: "input",
    name: "Installation",
    message: "Please enter installation instruction of your project:",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please enter Usage of your project:",
  },
  {
    type: "list",
    message: "What select the appropriate License",
    name: "License",
    choices: [
      "Apache License 2.0",
      "Boost Software License 1.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "MIT License",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please enter contributing members of your project:",
  },
  {
    type: "input",
    name: "Tests",
    message: "Please enter tests of your project:",
  },
  {
    type: "input",
    name: "Questions",
    message: "Please enter if there are any questions related to your project:",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated");
  });
}

const writeFileAsync = util.promisify(writeToFile);

// Main function
async function init() {
  try {
    // Prompt users to provide inputs
    const userResponses = await inquirer.prompt(questions);
    console.log("User's Response ", userResponses);
    console.log(
      "Successfully recorded response"
    );
    const markdown = generateMarkdown(userResponses);
    console.log(markdown);

    await writeFileAsync("Sample_README.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

//Initializing main function
init();
