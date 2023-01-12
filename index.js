const inquirer = require("inquirer");
const fs = require("fs");

const readMe = ({
  title,
  licenseBadge,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  email,
  questions,
}) => `
# ${title} 

${licenseBadge}

## Description
${description}

## Table of Contents
* [Installation](#-installation)
* [Usage](#-usage)
* [License](#-license)
* [Contributing](#-contributing)
* [Tests](#-tests)
* [Questions](#-questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions about the project you can email me directly at ${email}. Or you can visit
my Github repository at [${questions}](https://www.github.com/${questions}) 

`;

inquirer
  .prompt([
    {
      type: "input",
      name: "questions",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a brief description of your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the commands needed to install all the dependencies?",
    },
    {
      type: "input",
      name: "usage",
      message: "What should someone know to use your code?",
    },
    {
      type: "list",
      name: "license",
      message: "What license is your project going to have?",
      choices: ["MIT", "BSD 3", "Apache 2", "Mozilla 2", "none"],
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Is there a certain case to follow when contributing to your code?",
    },
    {
      type: "input",
      name: "tests",
      message: "Are there any tests that need to be run?",
    },
  ])
  .then((responses) => {
    switch (responses.license) {
      case "MIT":
        responses.licenseBadge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        let MITReadme = readMe(responses);
        fs.writeFile("README.md", MITReadme, (error) =>
          error ? console.error(error) : console.log("success")
        );
        break;
      case "BSD 3":
        responses.licenseBadge =
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        let BSDReadme = readMe(responses);
        fs.writeFile("README.md", BSDReadme, (error) =>
          error ? console.error(error) : console.log("success")
        );
        break;
      case "Apache 2":
        responses.licenseBadge =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        let ApacheReadme = readMe(responses);
        fs.writeFile("README.md", ApacheReadme, (error) =>
          error ? console.error(error) : console.log("success")
        );
        break;
      case "Mozilla 2":
        responses.licenseBadge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        let MozillaReadme = readMe(responses);
        fs.writeFile("README.md", MozillaReadme, (error) =>
          error ? console.error(error) : console.log("success")
        );
        break;
      case "none":
        let noReadme = readMe(responses);
        fs.writeFile("README.md", noReadme, (error) =>
          error ? console.error(error) : console.log("success")
        );
        break;
    }
  });
