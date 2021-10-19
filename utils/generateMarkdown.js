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
    default:
      badge = "";
      break;
  }
  return badge;
}

function renderLicenseSection(license) {
  let licenseLink;
  switch (license) {
    case "Apache 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "ISC":
      licenseLink = "https://opensource.org/licenses/ISC";
      break;
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Mozilla":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

function generateMarkdown(data) {
  return `# ${data.title}

  [${renderLicenseBadge(data.license)}](${renderLicenseSection(data.license)})
  

## Table Of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
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
This application is covered by the  [${renderLicenseBadge(
    data.license
  )}](${renderLicenseSection(data.license)})license. 

## Questions 
Find me on GitHub: ${data.github} </br>
Link to my Github: https://github.com/${data.github} </br>
Email me with any questions : ${data.email}

`;
}

module.exports = generateMarkdown;
