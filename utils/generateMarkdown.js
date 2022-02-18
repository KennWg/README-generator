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
    ## License {#license}

    This project is licensed under the ${license} license, for further information please go to the link below:   
    `
  } else {
    return '';
  }
}

//Function to generate table of contents
const genToc = data => {
  let markup = `

  ## Table of Contents
  
  `;

  if(data.description){
    markup += `[About the Project](#description)  `;
  }
  if(data.install){
    markup += `[Installation Information](#installation)  `;
  }
  if(data.usage){
    markup += `[Usage Guide](#usage)  `;
  }
  if(data.license != 'None of the Above'){
    markup += `[License](#license)  `;
  }
  if(data.contributing){
    markup += `[How to Contribute](#contributing)  `;
  }
  if(data.tests){
    markup += `[Tests](#tests)`;
  }
  markup += `[Questions](#questions)`;
  return markup;
};

//Function for description
const genDesc = data => {
  if(data.description){
    return `
    ## About the Project {#description}

    ${data.description}

    `
  } else {
    return ''
  }
};

//Function for install
const genInst = data => {
  if(data.install){
    return `
    ## Installation Information {#installation}

    ${data.install}

    `
  } else {
    return ''
  }
};

//Function for usage
const genUse = data => {
  if(data.usage){
    return `
    ## Usage Guide {#usage}

    ${data.usage}

    `
  } else {
    return ''
  }
};

//Function for contribute
const genCont = data => {
  if(data.contributing){
    return `
    ## How to Contribute {#contributing}

    ${data.contributing}

    `
  } else {
    return ''
  }
};

//Function for tests
const genTest = data => {
  if(data.tests){
    return `
    ## Tests {#tests}

    ${data.tests}
    `
  } else {
    return ''
  }
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.project}  

![Badge for License](${renderLicenseBadge(data.license)})

${genToc(data)}
${genDesc(data)}
${genInst(data)}
${genUse(data)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${genCont(data)}
${genTest(data)}

## Questions {#questions}

For any further questions, you can find me at: [${data.username}](https://github.com/${data.username})  
or email me with further questions at ${data.username}.

`;
}

module.exports = generateMarkdown;
