class Employee {
    constructor(name1, id, email) {
      this.name1 = name1
      this.id = id
      this.email = email
    }
    getName(){
        return this.name1
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

module.exports = Employee;