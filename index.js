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
            message: "E-mail me for any questions:",
            name: "email",
        },
    ])
    .then(function (response) {
        var text;
        text = `
[![MIT license](https://img.shields.io/badge/License-${response.license}-blue.svg)](https://lbesson.mit-license.org/)

# ${response.title}

## Description
${response.description}



## Table of Contents
### Installation
### Usage information
### License
### Contributing
### Tests
### Contact

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

## Email me for any questions at :
${response.email}
`
        fs.writeFile('readme.md', text, function (err) {
            if (err) throw err;
            console.log('New readme file created !')
        })
    })
