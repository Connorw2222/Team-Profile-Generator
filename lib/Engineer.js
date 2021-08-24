const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name1, id, email,github) {
      super(name1, id, email);
      this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
        
}

module.exports = Engineer;