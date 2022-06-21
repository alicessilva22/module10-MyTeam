const Manager= require('../utils/Manager');

test('can we get name office number object', () => {
    let man = new Manager('peter parker', 1, 'peter@parker.com', 2)
    expect(man.officeNumber).toBe(2)
})

test('can we get a role with the class method', () => {
    let man = new Manager('peter parker', 1, 'peter@parker.com', 2)
    expect(man.getRole()).toBe("Manager")
})

