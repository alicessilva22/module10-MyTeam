const fs = require('fs');
const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        console.log(this.name);
    };
    getId() {
        console.log(this.id);
    };
    getEmail() {
        console.log(this.email);
    };
    getRole() {
        return this.role = "Employee";
    };
};

module.exports = Employee;


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