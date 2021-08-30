const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/template")

let team = [];
let string = '';
// out put directory, were does the file go. 
// out put name, path.resolve THEN (__dirName) THEN name 
// file path path.join(name,*FileName*.html) 

// const, requier in the template JS generateHTML(team), second arugment in write file 

//utf-8


//node template.js
function buildTeam() {
    try {
        fs.writeFile("Team-Profile.html", generateHTML(team), 'utf-8')
    } catch (err) {
        return console.log(err);
    }
    console.log(team)
}


function questionair() {
    try {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?"
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: [
                    'Engineer', 'Intern', 'Manager'
                ]
            }

        ])
            .then(function (answer) {
                console.log(answer)

                if (answer.role === "Engineer") {
                    inquirer.prompt([{
                        type: 'input',
                        name: 'var',
                        message: "What is the employee's github username"
                    },])
                        .then((answer2) => {
                            // add to array
                            const engineer = new Engineer(answer.name, answer.id, answer.email, answer2.var);
                            team.push(engineer)
                            lastQuestion()
                        })
                     } else if (answer.role === "Manager") {
                    inquirer.prompt([{
                        type: 'input',
                        name: 'var',
                        message: "What is the employee's office number?"
                    }])
                        .then((answer2) => {
                            // add to array
                            const manager = new Manager(answer.name, answer.id, answer.email, answer2.var);
                            team.push(manager);
                            lastQuestion()
                        })
                } else if (answer.role === "Intern") {
                    inquirer.prompt([{
                        type: 'input',
                        name: 'var',
                        message: "What is the employee's School"
                    }])
                        .then((answer2) => {

                            // add to array
                            const intern = new Intern(answer.name, answer.id, answer.email, answer2.var);
                            team.push(intern);
                            lastQuestion()
                        })
                }
            })

    } catch (err) {
        console.log(err);
    }

}


function lastQuestion() {
    inquirer.prompt([{
        type: 'list',
        name: 'finish',
        Message: 'Would you like to add anymore employees?',
        choices: ['yes', 'no']
    }])
        .then(({ finish }) => {
            if (finish === 'no') {
                questionair()
            }
            else {
                buildTeam()
            }
        })
}
questionair();
