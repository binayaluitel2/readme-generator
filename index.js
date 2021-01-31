const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  
    {
      type: 'input',
      name: 'Description',
      message: 'Please enter description of your project:',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Please enter installation instruction of your project:',
    },
    {
      type: 'list',
      message: 'What select the appropriate License',
      name: 'License',
      choices: [ 'Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0','MIT License', 'The Unlicense'],
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Please enter contributing members of your project:',
    },
    {
      type: 'input',
      name: 'Test',
      message: 'Please enter tests of your project:',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Please enter description of your project:',
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Please enter if there are any questions related to your project:',
    },
  ])

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Success")
    });
}

 function init() {};

init();
