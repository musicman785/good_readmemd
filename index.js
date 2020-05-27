//var to require inquirer module
const inquirer = require("inquirer");

//var for file system module
const fs = require("fs");
//var for axios call
const axios = require("axios");

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
        message: "How do you install your application?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions for application usage:",
        name: "instructions"
    },
    {
        type: "input",
        message: "Provide license name (Example: MIT):",
        name: "license"
    },
    {
        type: "input",
        message: "What is license URL?",
        name: "licenseURL"
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
    //use fs to write file with all user data responses
    fs.writeFile(fileName, data, function (err) {
        //conditional to ensure there are no errors in file
        if (err) {
            console.log(err)
        } else {
            console.log("success!");
        }

    });

}

// Function displays questions in command line
async function init() {
    //var holds user answers to questions
    const userResponse = await inquirer.prompt(questions);
    console.log(userResponse);

    //variable to deconstruct user responses
    const { name, title, description, installation, instructions, license, licenseURL, contributors, tests } = userResponse

    //api call with axios from github await and async functions will eliminate pending promises
    const githubInfo = await axios.get(`https://api.github.com/users/${name}`);
    //log to console to see github api object
    console.log(githubInfo);

    //variable to deconstruct object from axios api call and pull only needed info
    const { data: { avatar_url, html_url, location, email }} = githubInfo

    //variable to collect github contributors into an array
    const contributorArray = contributors.split(",");

    let contributorsURLstring = ``;


   contributorArray.forEach(function(element){
    
   let url = `http://github.com/${element}`;

   const mdString = `\n[${element}](${url})\n`;

   contributorsURLstring += mdString;

    
   });
    //variable to call generateMarkdown function with arguments from other file
    const markdown = generateMarkdown({ name, title, description, installation, instructions, license, licenseURL, contributorsURLstring, tests, avatar_url, html_url, location, email });

    //call writeToFile() function with filename and data arguments
    writeToFile("Response.md", markdown);

};
//call init() function to begin prompting user questions
init();

