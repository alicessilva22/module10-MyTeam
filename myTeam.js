const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./utils/generateHtml');
const Employee = require('./utils/Employee');
const Engineer = require('./utils/Engineer');
const Intern = require('./utils/Intern');
const Manager = require('./utils/Manager');

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
        message: 'What is the Employee\'s email?',
        name: 'email'
    },
];


inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generateHtml(answers);
});

