const fs = require('fs');
const generateHtml = ({
    name,
    id,
    email,
    officeNumber,
    github,
    school
}) => {
    console.log('GENERATING HTML');
    const template = (`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Minified version -->
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <div class="employees">
            <section class="card">
                <header>`${name}`</header>
                <ul>
                    <li>`${id} `</li>
                    <li>`${email} `</li>
                </ul>
            </section>
            <section class="card">
                <header>Employee Name</header>
                <ul>
                    <li>ID</li>
                    <li>Email</li>
                </ul>
            </section>
            <section class="card">
                <header>Employee Name</header>
                <ul>
                    <li>ID</li>
                    <li>Email</li>
                </ul>
            </section>
            <section class="card">
                <header>Employee Name</header>
                <ul>
                    <li>ID</li>
                    <li>Email</li>
                </ul>
            </section>
        </div>
    
    </body>
    
    </html>
        `);

    fs.writeFileSync('./output/index.html', template(teamMembers))
    console.log('Team Created');
};

module.exports = {
    generateHtml
};