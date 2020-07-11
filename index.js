var fs = require("fs");
var inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

inquirer
    .prompt([
        {
            type: "input",
            message: "Title of the project",
            name: "title"
        },
        {
            type: "input",
            message: "Description:",
            name: "description"
        },
        {
            type: "input",
            message: "Installation:",
            name: "installation"
        },
        {
            type: "input",
            message: "Usage:",
            name: "usage"
        },
        {
            type: "list",
            message: "License:",
            name: "license",
            choices: ["Apache2", "MIT", "GPL"]
        },
        {
            type: "input",
            message: "Contributing:",
            name: "contributing",
        },
        {
            type: "input",
            message: "Tests:",
            name: "tests",
        },
        {
            type: "input",
            message: "GitHub profile:",
            name: "github",
        },
        {
            type: "input",
            message: "E-mail:",
            name: "email",
        },
    ])
    .then(function (response) {
        var text = `
[![MIT license](https://img.shields.io/badge/License-${response.license}-blue.svg)](https://lbesson.mit-license.org/)

# ${response.title}

## Description
${response.description}



## Table of Contents
#### [Installation](https://github.com/CD-prog/readme-generator#installation-1)
#### [Usage information](https://github.com/CD-prog/readme-generator#usage-information-1)
#### [License](https://github.com/CD-prog/readme-generator#license-1)
#### [Contributing](https://github.com/CD-prog/readme-generator#contributing-1)
#### [Tests](https://github.com/CD-prog/readme-generator#tests-1)
#### [Questions](https://github.com/CD-prog/readme-generator#questions-)


## Installation
${response.installation}

## Usage information
${response.usage}

## License
${response.license}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions ?
### https://github.com/${response.github}
### ${response.email}
`
        fs.writeFile('README.md',text, function (err) {
            if (err) throw err;
            console.log('New README.md file created !')
        })
    })
