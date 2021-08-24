const { expect } = require("@jest/globals")
const Intern = require("../lib/Intern")
const Employee = require("../lib/Employee")

test.todo('test Manager and return office number and role'), (officeNumber, role) =>{
    const jim = new Intern("FSU", "Manager")
    expect(jim.school).tobe(String)
    expect(jim.role).tobe("Intern")
    expect(jim.getSchool()).toMatch(String)
    expect(jim.getRole()).toMatch("Manger") 
    }
    