const checkLoginAndPassword = require('./target2.js')

test('Провірка на вірність паролю', () => {
    expect(checkLoginAndPassword('user1', 'pass1')).toBe('Secret1');
    expect(checkLoginAndPassword('user2', 'pass2')).toBe('Secret2');
    expect(checkLoginAndPassword('user3', 'pass3')).toBe('Secret3');
})

test('Якщо нічого не передадуть', () => {
    expect(checkLoginAndPassword('', '')).toBe('Введіть якісь значення');
})
test('Якщо щось буде введене невірно', () => {
    expect(checkLoginAndPassword('user1', 'BAn')).toBe('Пароль або логін введено невірно');
    expect(checkLoginAndPassword('Lff', 'pass2')).toBe('Пароль або логін введено невірно');

})