// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-green';
    case 'ISC':
      return 'https://img.shields.io/badge/license-ISC-green';
    case 'Apache License 2.0':
      return 'https://img.shields.io/badge/license-Apache%20License%202.0-green';
    case 'GNU GPLv3':
      return 'https://img.shields.io/badge/license-GNU%20GPLv3-green';
    default:
      return '';
  }
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license!='None of the Above'){
    return `
    Link to license [here](./dist/license.txt).
    `
  } else {
    return '';
  }
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!='None of the Above'){
    return `
    This project is licensed under the ${license} license, for further information please go to the link below:   
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

`;
}
/*
console.log(renderLicenseBadge('MIT'));
console.log(renderLicenseLink('MIT'));
console.log(renderLicenseSection('MIT'));
*/

module.exports = generateMarkdown;
