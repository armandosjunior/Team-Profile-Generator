const inquirer = require("inquirer");
const fs = require('fs');

const generateHTML = ({ position, name, id, email, office, github, addnew }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Display</title>
</head>
<body>

<div class="container-fluid bg-warning p-5">
  <div class="text-center">
    <h1 class="text-center text-light display-4">Full Team List</h1>
    <button type="button" class="btn btn-outline-dark align-middle">Add Employee</button>
  </div>
</div>
<div class="container p-3">
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div id="employee-col" class="col">
            <div class="card mb-3" style="width: 18rem;">
                <div class="card-body">
                <h5 id="job-position" class="card-title">${position}</h5>
                <h6 id="employee-name" class="card-subtitle mb-2 text-muted">${name}</h6>
                <ul class="list-group list-group-flush">
                    <li id="employee-id" class="list-group-item">ID: ${id}</li>
                    <li id="employee-email" class="list-group-item">Email: ${email}</li>
                    <li id="employee-office-number" class="list-group-item">Office number: ${office}</li>
                    <li id="employee-git" class="list-group-item">Github: <a href="https://www.github.com/${github}" target="_blank">${github}</a></li>
                </ul>
                </div>
            </div>
        </div>
        
    </div>

</div>

</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'position',
      message: `Enter new employee's job title?`,
    },
    {
      type: 'input',
      name: 'name',
      message: `What is the employee's name?`,
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: `What is the employee's email`,
    },
    {
      type: 'input',
      name: 'office',
      message: 'Enter employee office number',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter employee github username',
    },
    {
      type: 'confirm',
      name: 'addnew',
      message: 'Do you wish to add another employee?',
    }
  ])
  .then((answers) => {
    if (answers.addnew) {
      return generateHTML;
    } else {
      const htmlPageContent = generateHTML(answers);

      fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('index.html was successfully created!')
      );
    }
  });


/*
];,,  `

  function getAnswers() {
    return inquirer.prompt(questions).then((answers) => {
      if (answers.is_finished) {
        return answers;
      } else {
        return getAnswers();
      }
    });
  }
  
  getAnswers()
    .then(console.log)
    .catch((error) => {});


*/


/*
.then((answers) => {
    if (answers.addnew) {
      return inquirer.prompt();
    } else {
      const htmlPageContent = generateHTML(answers);

      fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('index.html was successfully created!')
      );
    }
  });
*/