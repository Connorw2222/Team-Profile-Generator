const { expect } = require("@jest/globals")
const Employee = require("../lib/Employee")

test.todo('test name and return name'), (name, id, email) => {
    const jim = new Employee("Jim", 1,"jim@gmail.com");
    expect(jim.name).toBe(String);
    expect(jim.id).toBe(Number);
    expect(jim.email).toBe(String);
    expect(jim.getName()).toMatch("Jim")
    expect(jim.getId()).toMatch(1)
    expect(jim.getEmail()).toMatch("Jim")
    expect(jim.getRole()).toMatch("Employee")
}