const Intern = require('../utils/Intern');

test('can we get school through object', () => {
    let int = new Intern('hard-knocks')
    expect(int.school).toBe('hard-knocks')
})