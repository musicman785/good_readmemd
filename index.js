//var to require inquirer module
const inquirer = require("inquirer");

//var for file system module
const fs = require("fs");

//var for generate markdown function
const generateMarkdown = require("./utils/generateMarkdown.js");

// const var for questions array
const questions = [
    {
        type: "input",
        message: "What is your github user name?",
        name: "name"
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
        message: "Examples to run tests:",
        name: "tests"
    }
];




// function to save user input to file
function writeToFile(fileName, data) {
    console.log(fileName);
fs.writeFile(fileName, data, function(err) {
    if (err){
        console.log(err)
    }else {
        console.log("success!");
    }
    
});

}

// Function displays questions in command line
async function init() {
    //var holds user answers to questions
    const userResponse = await inquirer.prompt(questions);
    console.log(userResponse);
    const { name, title, description } = userResponse

    const markdown = generateMarkdown({name, title, description});
    //call writeToFile() function
    writeToFile("Response.md", markdown);
    
};
//call init() function to  
init();

