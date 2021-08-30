// create a team variable and make all the data
const team = {
    
}
const generateHTML = function(team) {
 //functions for each role/card
//  function name(SPeicail info) {
//      return ``
//  }
//fucntions go into array
    if(team.getRole() === "Manager"){
        postion = `<i class = "fas fa-mug-hot" style = "color:red" ></i>`
        role = `Office Number : ${team.officeNumber}`
            //Call function here
    }
    else if(team.getRole() === "Engineer"){
        postion = `<i class = "fas fa-tools" style = "color:red" ></i>`
        role = `GitHub Username: <a href="https://github.com/${team.github}" target="_blank">${team.github}</a>`
    }
    else if(team.getRole() === "Intern"){
        postion = `<i class = "fas fa-pencil-alt" style = "color:red" ></i>`
        role = `School: ${team.school}`
    }
    return 


`<div class="col-md-4 col-sm-6 col-12 col-lg-3">
<div class="card shadow-lg mb-5 bg-white rounded">
    <div class=""card-header bg-info"">
        <h3 class="text-black text-center">${team.name1}</h3>
        <h5 class="text-black text-center">${position}</i> ${team.title}</h5>
    </div>
    <div class="card-body">
        <ul class="list-unstyled">
            <li>Employee ID: ${team.id}</li>
            <li>Email: <a href="mailto:${team.email}">${team.email}</a></li>
            <li>${role}</i>
        </u>
    </div>
</div>
<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
</body>
</html>`
    // return *VARNAME*.join() line 23
};

// Generate html returns : 1 gaint string
// use a join method of an Array
// Array = var = empty Array let = ***.push()
// to retun everything  .join() google

        //put the rest of html here
module.exports = team =>{
    return `<!DOCTYPE html
    <html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Portfolio</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
</style>
</head>
<body>
<div class="header">
<div class="jumbotron bg-info">
   <h1 class="display-4 text-black text-center font-weight-bold">Meet the Team</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
   ${generateHTML(team)}
    </div>
</div>`
}
