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

```
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
```



Then lists prompt types asking helping userexplain project and fill out the readme file:
```
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

```

Then a function to
``` 
function generateREADME(answers) {
return`# ${answers.title}
```

Finally,  create and write readme file from users answers:
```
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
  ```



## Credits


## License
MIT

## Tests
```
no
```

## Questions
You can view my GitHub profile at [](https://github.com/) and if you have any additional questions you can email me at 
