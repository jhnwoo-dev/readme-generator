const fs = require("fs");
const inquirer = require("inquirer");

const generateREADME = ({
    title,
    description1,
    description2,
    description3,
    description4,
    install,
    usage,
    credits1,
    github,
    email,
    credits2,
    license,
    badge,
    features,
    contribution,
    tests,
}) => {
    return `
# ${title}

## Description

${description1}
${description2}
${description3}
${description4}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${install}

## Usage

${usage}
    

## Credits

${credits1} - https://github.com/${github}

${credits2}

## License

${license}

## Badges

![${license}](https://img.shields.io/badge/${badge})

## Features

${features}

## How to Contribute

${contribution}

## Tests

${tests}

## Questions

For any questions regarding this project, feel free to reach out to the email listed:
${email}
    `;
};

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of the project?",
            name: "title",
        },
        {
            type: "input",
            message: "Description: What was the motivation for this project?",
            name: "description1",
        },
        {
            type: "input",
            message: "Description: Why did you build this project?",
            name: "description2",
        },
        {
            type: "input",
            message: "Description: What problem does this project solve?",
            name: "description3",
        },
        {
            type: "input",
            message: "Description: What did you learn?",
            name: "description4",
        },
        {
            type: "input",
            message:
                "Installation: What are the steps required to install your project?",
            name: "install",
        },
        {
            type: "input",
            message:
                "Usage: Provide instructions and examples for use. You may edit the README file afterwards to input images.",
            name: "usage",
        },
        {
            type: "input",
            message: "Credits: Input your name as the primary creditor.",
            name: "credits1",
        },
        {
            type: "input",
            message: "Credits: Input your GitHub username.",
            name: "github",
        },
        {
            type: "input",
            message: "Credits: Input your email.",
            name: "email",
        },
        {
            type: "input",
            message:
                "Credits: List any third-party assets that require attribution. Video tutorials as well.",
            name: "credits2",
        },
        {
            type: "list",
            message: "License: Select the license for this project.",
            choices: ["Apache 2.0", "GNU GPLv3", "MIT", "GNU GPLv3", "N/A"],
            name: "license",
        },
        {
            type: "list",
            message: "Select the relative badge for your license.",
            choices: [
                "license-Apache-blue",
                "license-MIT-green",
                "license-GPL-blue",
                "none-%20-blue",
            ],
            name: "badge",
        },
        {
            type: "input",
            message: "If your project has a lot of features, list them here.",
            name: "features",
        },
        {
            type: "input",
            message:
                "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.The Contributor Covenant is an industry standard, but you can always write your own if you'd prefer.",
            name: "contribution",
        },
        {
            type: "input",
            message:
                "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
            name: "tests",
        },
    ])
    .then((response) =>
        fs.writeFile("./output/README.md", generateREADME(response), (err) =>
            err ? console.error(err) : console.log("README has been generated!")
        )
    );
