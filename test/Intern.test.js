const Intern = require('../utils/Intern');

test('can we get school through object', () => {
    let int = new Intern('peter parker', 1, 'peter@parker.com','hard-knocks')
    expect(int.school).toBe('hard-knocks')
})

test('can we get a role with the class method', () => {
    let int = new Intern('peter parker', 1, 'peter@parker.com', 'hard-knocks')
    expect(int.getRole()).toBe("Intern")
})