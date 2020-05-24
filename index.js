//var to require inquirer module
const inquirer = require("inquirer");

//var for file system module
const fs = require("fs");

// const var for questions array
const questions = [
    { 
        type: "input",
        message: "What is your github user name?",
        name: "githubName"
    },
    {
        type: "input",
        message: "What is the title of your application?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide application description:",
        name: "description"
    },
    {
        type: "input",
        message: "Provide table of contents. Write contents with commas and no spaces:",
        name: "tableOfContents"
    },
    {
        type: "input",
        message: "How do you install your application?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions for application usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "What license are required for your application?",
        name: "license"
    },
    {
        type: "input",
        message: "Enter github user names of the contributors if any (If there are mulitple contributor, seperate names with comma and no space!):",
        name: "contributors"
    },
    {
        type: "input",
        message: "Examples to run tests:g",
        name: "tests"
    }
];




// function to save user input to file
function writeToFile(fileName, data) {
    

}
// function to initiate questions
function init() {
    
    inquirer.prompt(questions);
    
    
    
}
//call init() to 
init();
