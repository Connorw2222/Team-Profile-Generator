const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")
const Employee = require("../lib/Engineer")

test.todo('test Manager and return office number and role'), (officeNumber, role) =>{
    const jim = new Engineer("github.com")
    expect(jim.github).tobe(String)
    expect(jim.role).tobe("Engineer")
    expect(jim.getGithub()).toMatch(12)
    expect(jim.getRole()).toMatch("Engineer")
    }
    