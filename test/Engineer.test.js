const Engineer = require('../utils/Engineer');

test('can we get github through object', () => {
    let eng = new Engineer('peter-parker')
    expect(eng.github).toBe('peter-parker')
})