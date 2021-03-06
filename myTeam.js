const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateHtml');
const Engineer = require('./utils/Engineer');
const Intern = require('./utils/Intern');
const Manager = require('./utils/Manager');

const teamMembers = []



inquirer.prompt([
    // const questions = [
    {
        type: 'input',
        message: 'What is the Manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Manager\'s id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the Manager\'s email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Manager\'s office number?',
        name: 'officeNumber',
    },

]).then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    teamMembers.push(manager)
    console.log(teamMembers);
    mainQuestion()
})

function mainQuestion() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add Engineer', 'Add Intern', 'Finish'],
            name: 'main',
        },
    ]).then((answer) => {
        switch (answer.main) {
            case "Add Engineer": addEngineer()
                break;
            case "Add Intern": addIntern()
                break;
            case "Finish": createTeam()
                break;
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineer\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the Engineer\'s id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the Engineer\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the Engineer\'s GitHub?',
            name: 'github',
        },
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamMembers.push(engineer)
        console.log(teamMembers);
        mainQuestion()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Intern\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the Intern\'s id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the Intern\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the Intern\'s school?',
            name: 'school',
        },

    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamMembers.push(intern)
        console.log(teamMembers);
        mainQuestion()
    })

}

function createTeam() {
    fs.writeFile('./output/index.html', generate(teamMembers), (err) => {
        if (err) throw err;
        console.log('created index');
    });
};

// inquirer.prompt(questions).then((answers) => {
//     console.log(answers);
//     utils.generateHtml(answers);
// });


