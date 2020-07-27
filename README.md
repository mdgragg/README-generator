# 

![license shield](https://img.shields.io/badge/License-MIT-green.svg)

## Description


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Install npm

## Usage
First, requires inquirer, fs, and util:

```function promptUser() {
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
      message: "Provide instructions and examples for use. Include screenshots as needed.",
      name: "usage"
      },
      {
      type: "list",
      message: "Select type of license",
      name: "license",
      choices: [ 
        { value: 'MIT', },
        { value: 'GPL-3.0',},
        { value: 'AGPL-3.0',},
      ],
      },
      {
      type: "input",
      message: "How can people help with this project?",
      name: "contribution"  
      },
      {
      type: "input",
      message: "Are there test instructions for this project?",
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
}```

<img src="https://raw.githubusercontent.com/mdgragg/README-generator/master/images/ScreenShot1.png" width="300" />

Then lists prompt types asking helping userexplain project and fill out the readme file:

<img src="https://raw.githubusercontent.com/mdgragg/README-generator/master/images/ScreenShot2.png" width="500" />

Finally,  create and write readme file from users answers:

<img src="https://raw.githubusercontent.com/mdgragg/README-generator/master/images/ScreenShot3.png" width="300" />


## Credits


## License
MIT

## Tests


## Questions
You can view my GitHub profile at [](https://github.com/) and if you have any additional questions you can email me at 
