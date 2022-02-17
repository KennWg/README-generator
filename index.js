const fs = require('fs');
const inquirer = require('inquirer');
const generateLicense = require('./utils/generateLicense');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// App init function
function init() {
    questions()
    .then(answers => {
        return generateLicense(answers);
    })
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(pageMarkdown => {
        return writeToFile('./dist/README.md',pageMarkdown);
    })
    .then(writeResponse => {
        console.log(writeResponse);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
