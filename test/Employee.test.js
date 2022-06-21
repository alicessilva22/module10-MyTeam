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
test('can we get id through object', () => {
    let emp = new Employee('peter parker', 1)
    expect(emp.id).toBe(1)
})
test('can we get email through object', () => {
    let emp = new Employee('peter parker', 1, 'peter@parker.com')
    expect(emp.email).toBe('peter@parker.com')
})


test('can we get a name with the class method', () => {
    let emp = new Employee('peter parker')
    expect(emp.getName()).toBe('peter parker')
})
test('can we get an id with the class method', () => {
    let emp = new Employee('peter parker', 1)
    expect(emp.getId()).toBe(1)
})
test('can we get email through the class method', () => {
    let emp = new Employee('peter parker', 1, 'peter@parker.com')
    expect(emp.getEmail()).toBe('peter@parker.com')
})

test('can we get a role with the class method', () => {
    let emp = new Employee('peter parker', 1, 'peter@parker.com')
    expect(emp.getRole()).toBe("Employee")
})