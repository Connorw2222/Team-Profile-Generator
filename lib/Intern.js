const Employee = require("./Employee"); 

class Intern extends Employee {
    constructor(name1, id, email, school) {
      super(name1, id, email);
      this.school = school 
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}        

module.exports = Intern;