const buildTeam = (team) => {

    const makeManager = function (manager) {
        return `<div class="card">
        <header>
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-suitcase"></i> Manager</h3>
        </header>
        <div class="card-body">
            <ul class="list">
                <li class="list-id">ID: ${manager.getId()}</li>
                <li class="list-email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-office">Office number: ${manager.getOfficenumber()}</li>
            </ul>
        </div>
    </div>`

    };

    const makeEngineer = function (engineer) {
        return `<div class="card">
         <header>
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-laptop-code"></i> Engineer</h3>
        </header>
        <div class="card-body">
            <ul class="list">
                <li class="list-id">ID: ${engineer.getId()}</li>
                <li class="list-email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}/a></li>
                <li class="list-github">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank"
                        rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
        </div>
        `

    };

    const makeIntern = function (intern) {
        return `<div class="card">
            <header>
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fa-solid fa-file-pen"></i> Intern</h3>
            </header>
            <div class="card-body">
                <ul class="list">
                    <li class="list-id">ID: ${intern.getId()}</li>
                    <li class="list-email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-school">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`
    };

    const teamArr = []

    teamArr.push(team.filter(emp => emp.getRole() === "Manager").map(mana => makeManager(mana)))
    teamArr.push(team.filter(emp => emp.getRole() === "Engineer").map(eng => makeEngineer(eng)))
    teamArr.push(team.filter(emp => emp.getRole() === "Intern").map(intern => makeIntern(intern)))

    return teamArr.join('')
}


module.exports = (teamMembers) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../assets/style.css" />
        <script src="https://kit.fontawesome.com/41b233bbbd.js" crossorigin="anonymous"></script>
        <title>Team Generator</title>
    </head>

    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <section class="team">
        ${buildTeam(teamMembers)}
    </section>    
    </body>
    </html>`
};