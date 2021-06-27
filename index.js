// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([

    {
       type: 'input', 
       name: 'projectTitle',
       message: "What is the name of your project?"

    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project used for?",
    },
    {
        type: "list", 
        name: "license",
        message: "Pick the correct licensure:",
        choices: [
            "Apache",
            "Academic",
            "Boost",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "NCSA",
            "Open",
            "Unlicense",
        ]
    },
    {
        type: "input", 
        name: "contributors",
        message: "Did anyone contribute to this project? If none leave blank",

    },
    {
        type: "input",
        name: "installation",
        message: "Instructions for installation",
    },
    {
        type: "input",
        name: "tests",
        message: "Were there any tests run? If none leave blank",
    
    },
    {
        type: "input",
        name: "questions",
        Message: "How do you troubleshoot any issues?",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email here:",
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username here:",
    },

    ])
}

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
async function init() {
    try{    
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        await writeFileAsync('./final-product/README.md', generateContent);
        console.log("Success")
    } catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
