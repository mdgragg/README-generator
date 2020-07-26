const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
      },
      {
      type: "input",
      message: "Enter a description of your project",
      name: "description"
      },
      {
      type: "input",
      message: "Enter any installation instructions",
      name: "installation"
      },
      {
      type: "input",
      message: "Enter usage information",
      name: "usage"
      },
      {
      type: "list",
      message: "Enter type of license",
      name: "license",
      choices: [ 
        { value: 'MIT', },
        { value: 'GNU GPLv3',},
      ],
      },
      {
      type: "input",
      message: "Enter contribution guidelines",
      name: "contribution"  
      },
      {
      type: "input",
      message: "Enter test instructions",
      name: "test"  
      },
      {
        type: "input",
        message: "Enter your GitHub username",
        name: "GitHub"  
      },
      {
        type: "input",
        message: "Enter your email",
        name: "email"  
      } 
  ]);
}
function generateREADME(answers) {
return`# ${answers.title}
${answers.license}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.contribution}

## License
${answers.license}

## Tests
${answers.test}

## Questions
You can view my GitHub profile here: [${answers.GitHub}](https://github.com/${answers.GitHub}) and if you have any additional questions you can email me at ${answers.email}
`
;
}
promptUser()
  .then(function(answers) {
    const readme = generateREADME(answers);
    return writeFileAsync("README.md", readme);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });