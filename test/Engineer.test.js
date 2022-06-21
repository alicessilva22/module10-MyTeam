const Engineer = require('../utils/Engineer');

test('can we get github through object', () => {
    let eng = new Engineer('peter parker', 1, 'peter@parker.com', 'peter_parker')
    expect(eng.github).toBe('peter_parker')
})

test('can we get a role with the class method', () => {
    let eng = new Engineer('peter parker', 1, 'peter@parker.com', 'peter_parker')
    expect(eng.getRole()).toBe("Engineer")
})