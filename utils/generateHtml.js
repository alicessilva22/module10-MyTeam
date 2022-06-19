const fs = require('fs');
const generateHtml = ({ }) => {
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
            <section>
                
            </section>
        
        </body>
        
        </html> 
        `);


    fs.writeFileSync('./output/index.html', template);
    console.log('Team Created');
    process.exit();
};

module.exports = {
    generateHtml
};