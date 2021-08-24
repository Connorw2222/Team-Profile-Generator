const { expect } = require("@jest/globals")
const Manager = require("../lib/Manager")
const Employee = require("../lib/Employee")

test.todo('test Manager and return office number and role'), (officeNumber, role) =>{
const jim = new Manager(12, "Manager")
expect(jim.officeNumber).tobe(Number)
expect(jim.role).tobe("Manager")
expect(jim.getOfficeNumber()).toMatch(12)
expect(jim.getRole()).toMatch("Manger")
}
