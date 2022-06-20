const Manager= require('../utils/Manager');

test('can we get name office number object', () => {
    let man = new Manager(2)
    expect(man.officeNumber).toBe(2)
})