function checkLoginAndPassword(login, password) {

    const Users= [
        {login: 'user1', password: 'pass1', secretPhrase: 'Secret1'},
        {login: 'user2', password: 'pass2', secretPhrase: 'Secret2'},
        {login: 'user3', password: 'pass3', secretPhrase: 'Secret3'},
    ]
    
        const user = Users.find(user => user.login === login && user.password === password);
    
        if(user){
            return user.secretPhrase
        }else if(login == '' || password == ''){
            return 'Введіть якісь значення'
        }else{
            return 'Пароль або логін введено невірно'
        }
    }
    module.exports = checkLoginAndPassword;
    