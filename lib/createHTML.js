
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
      <li class="list-group-item">GitHub: ${engineer.getGitHub()}</li>
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
  


