;
"use strict";
let getLanguage = function() {
    let index = doc.getElementById('select').selectedIndex;
    if (index == 0) {
        let label = doc.getElementsByClassName('startFormLabel');
        label[0].innerHTML = 'Welcome to our Company';
        let buttons = doc.getElementsByTagName('button');
        buttons[0].innerHTML = 'Log In';
        buttons[1].innerHTML = 'Sign in';
    } else {
        let label = doc.getElementsByClassName('startFormLabel');
        label[0].innerHTML = 'Добро пожаловать в нашу Компанию!';
        let buttons = doc.getElementsByTagName('button');
        buttons[0].innerHTML = 'Войти';
        buttons[1].innerHTML = 'Регистрация';
        for(let i = 0;  i <buttons.length; i++){
          buttons[i].style.fontSize = '1vw';
       }
    };

};
let getLogInForm = function() {

    console.log('log in');
};

let getSignInForm = function() {
    console.log('Sign in');
};