const Employee = require('../utils/Employee');

// describe('Employee', () => {
//     describe()
// })

test('is this an object?', () => {
    let emp = new Employee()
    expect(typeof(emp)).toBe('object')
})

test('can we get name through object', () => {
    let emp = new Employee('peter parker')
    expect(emp.name).toBe('peter parker')
})





test('can we get a name with the class method', () => {
    let emp = new Employee('peter parker')
    expect(emp.getName()).toBe('peter parker')
})