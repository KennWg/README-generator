const fs = require('fs');
const inquirer = require('inquirer');
const generateLicense = require('./utils/generateLicense');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username. (Required)',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email. (Required)',
        validate: emailInput => {
            if(emailInput){
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: 'Please enter the name of your project. (Required)',
        validate: projectInput => {
            if(projectInput){
                return true;
            } else {
                console.log('Please enter the name of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project.',
        default: ""
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions.',
        default: ""
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter instructions for usage.',
        default: ""
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license to use, if applicable.',
        choices: ['MIT','ISC','Apache License 2.0','GNU GPLv3','None of the Above'],
        default: 4
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter guidelines for contributing to the project.',
        default: ""
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any tests for the project.',
        default: ""
    }
];

// Function to prompt user with questions
function promptUser() {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function to start app
function init() {
    promptUser()
    .then(answers => {
        return generateLicense(answers);
    })
    /*.then(answers => {
        return generateMarkdown(answers);
    })
    .then(pageMarkdown => {
        return writeToFile('./dist/README.md',pageMarkdown);
    })
    .then(writeResponse => {
        console.log(writeResponse);
    }) */
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
