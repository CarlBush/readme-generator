const inquirer = require("inquirer");
const {writeReadMeFile} = require("./src/generateMarkdown")

//START OF INQUIRER PROMPT
const init = () => {
    return inquirer.prompt([
        //GITHUB USERNAME
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub Username!");
                    return false;
                }
            }
        },
        //EMAIL ADDRESS
        {
            type: "input",
            name: "email",
            message: "Enter your E-mail Address (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your E-mail Address!");
                    return false;
                }
            }
        },
        //TITLE OF PROJECT
        {
            type: "input",
            name: "title",
            message: "Enter the title of your project (Required)",
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log("Please enter the title of your project!");
                    return false;
                }
            }
        },
        //DESCRIPTION
        {
            type: "input",
            name: "desc",
            message: "Provide a description of the project"
        },
        //TABLE OF CONTENTS (NO INPUT NEEDED)
        
        //INSTALLATION
        {
            type: "input",
            name: "install",
            message: "Please provide installation instructions"
        },
        //USAGE
        {
            type: "input",
            name: "usage",
            message: "Please provide usage information."
        },
        //LICENSE (LIST)
        {
            type: "list",
            name: "license",
            message: "Please choose a license.",
            choices: ["MIT","Apache", "Boost", "(none)"]
        },
        //CONTRIBUTION 
        {
            type: "input",
            name: "contribution",
            message: "Please provide contributors and guidelines"
        },
        //TESTS
        {
            type: "input",
            name: "tests",
            message: "Please provide a list of instructions"
        },
        //QUESTIONS (NO INPUT NEEDED REFERENCED FROM GITHUB AND EMAIL)
        
    ])
    .then(responses =>{
        console.log(responses);
        writeReadMeFile(responses);
    });
};

init();