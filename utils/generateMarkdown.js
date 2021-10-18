function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case "Apache 2.0":
      badge =
        "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "GPL 3.0":
      badge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "ISC":
      badge =
        "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
      break;
    case "MIT":
      badge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Mozilla":
      badge =
        "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      break;
    case "None":
      badge = "";
      break;
    default:
      badge = "";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  

## Table Of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseBadge(data.license)} </br>
This application is covered by the ${renderLicenseBadge(data.license)} license. 

## Questions 
Find me on GitHub: ${data.github} </br>
Link to my Github: https://github.com/${data.github} </br>
Email me with any questions : ${data.email}

`;
}

module.exports = generateMarkdown;
