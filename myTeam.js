const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('utils/generateHtml.js')
// const Employee = require('.utils/Employee.js');
// const Engineer = require('.utils/Engineer.js');
// const Intern = require('.utils/Intern.js');
// const Manager = require('.utils/Manager.js');

const questions = [
    {
        type: 'input',
        message: 'What is the Employee\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Employee\'s id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the Employee\'s id?',
        name: 'email'
    },
];


inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generateHtml(answers);
});

