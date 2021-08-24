const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name1, id, email, officeNumber) {
        super(name1, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    };    
}    


module.exports = Manager;