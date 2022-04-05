
const createManager = manager => {
  return `
  <div class="card" style="width: 18rem;" >
    <div class="card-header">Name: ${manager.getName()}</div>
    <div class="card-body role">
      <i class="fa-solid fa-business-time"></i> Role: ${manager.getRole()}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
    </ul>
  </div>
  `;
};




const createEngineer = engineer => {
  return `
  <div class="card" style="width: 18rem;" >
    <div class="card-header">Name: ${engineer.getName()}</div>
    <div class="card-body role">
      <i class="fa-solid fa-laptop-code"></i> Role: ${engineer.getRole()}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href='https://github.com/${engineer.getGitHub()}' target='_blank'>${engineer.getGitHub()}</a></li>
    </ul>
  </div>
  `;
};




const createIntern = intern => {
  return `
  <div class="card" style="width: 18rem;" >
    <div class="card-header">Name: ${intern.getName()}</div>
    <div class="card-body role">
    <i class="fa-solid fa-clipboard-question"></i> Role: ${intern.getRole()}</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
    </div>
    `;
  };
  
  createHTML = (data) => {
    // array for cards 
    pageArr = []; 
    for (let i = 0; i < data.length; i++) {
        const teamMember = data[i];
        const role = teamMember.getRole(); 
  
        if (role === 'Manager') {
            const managerData = createManager(teamMember);
  
            pageArr.push(managerData);
        }
  
        if (role === 'Engineer') {
            const engineerData = createEngineer(teamMember);
  
            pageArr.push(engineerData);
        }
  
        if (role === 'Intern') {
            const internData = createIntern(teamMember);
  
            pageArr.push(internData);
        }
        
    }
  
    const teamMemberData = pageArr.join('')

    const createTeam = createTeamPage(teamMemberData); 
    return createTeam;
  
  }

  const createTeamPage = (teamMemberData) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"/>
    <link rel="stylesheet" href="./style.css"/>
    <title>Team Profile Generator</title>
  </head>
  <body>
    
    <header>
      <h1>My Team</h1>
    </header>

    <main class="container-fluid">
      <div class="row justify-content-center">
        ${teamMemberData}
      </div>
    </main>
    
  </body>
  </html>
  `
}



module.exports = createHTML;

  


