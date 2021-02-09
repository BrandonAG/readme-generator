const inquirer = require("inquirer");
const generator = require("./generator");
const questions = require("./questions");
const fs = require("fs");

// 1) Project Title
// 2) Description
// 3) Installation
// 4) Usage
// 5) Constributing
// 6) Testing
// 7) Questions
// 8) License

inquirer.prompt(questions)
.then(answers => {
    // console.log(answers);
    console.log(generator(answers));
    fs.writeFile("README.md", generator(answers), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
})
.catch(error => console.log(error));