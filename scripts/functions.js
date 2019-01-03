;
"use strict";
let getLanguage = function() { // Функция отслеживает состояние элемента выбора языка и меняет содержимое элементов 
    // DOM в зависимости от выбранного состояния;
    let index = doc.getElementById('select').selectedIndex;
    if (index == 0) {
        let label = doc.getElementsByClassName('startFormLabel');
        label[0].innerHTML = 'Welcome to our Company';
        let buttons = doc.getElementsByTagName('button');
        buttons[0].innerHTML = 'Log In';
        buttons[1].innerHTML = 'Sign in';
        language = 'English';
    } else {
        let label = doc.getElementsByClassName('startFormLabel');
        label[0].innerHTML = 'Добро пожаловать в нашу Компанию!';
        let buttons = doc.getElementsByTagName('button');
        buttons[0].innerHTML = 'Войти';
        buttons[1].innerHTML = 'Регистрация';
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.fontSize = '1vw';
        }
        language = 'Russian';
    };
};
let removeAllStartPageElements = function() { //Вспомогательная функция удаления всех элементов началдьной страницы;
    let form = doc.getElementsByClassName('startFormStyle');
    doc.body.removeChild(form[0]);
    let select = doc.getElementById('select');
    doc.body.removeChild(select);
};
let removeElementByID = function(id) { //Вспомогательная функция удаления элемента по Id;
    let element = doc.getElementById(id);
    let parentElement = element.parentNode;
    parentElement.removeChild(element);
};
let getLogInForm = function() { // Функция создает все элементы формы входа на сайт, в случае нажатия кнопки "Log In";
    removeAllStartPageElements();
    let form = doc.createElement('form');
    form.id = 'logInForm';
    doc.body.appendChild(form);
    form.setAttribute('class', 'startFormStyle');
    form.style.height = '40%';
    let label = doc.createElement('label');
    form.appendChild(label);
    label.style.top = '5%';
    label.setAttribute('class', 'startFormLabel');
    label.innerHTML = 'Login';
    let logInInput = doc.createElement('input');
    form.appendChild(logInInput);
    logInInput.setAttribute('class', 'inputLoginForm');
    logInInput.type = 'text';
    logInInput.placeholder = 'Enter your Login';
    let passwordInput = doc.createElement('input');
    form.appendChild(passwordInput);
    passwordInput.setAttribute('class', 'inputLoginForm');
    passwordInput.style.top = '45%';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Enter your Password';
    let buttonOK = doc.createElement('button');
    buttonOK.type = 'button';
    form.appendChild(buttonOK);
    buttonOK.setAttribute('class', 'signIn');
    buttonOK.innerHTML = 'Ok';
    buttonOK.style.color = 'green';
    buttonOK.style.top = '70%';
    buttonOK.style.left = '65%';
    buttonOK.style.height = '15%';
    buttonOK.addEventListener('click', getPersonalArea);
    let buttonHome = doc.createElement('button');
    buttonHome.type = 'button';
    form.appendChild(buttonHome);
    buttonHome.setAttribute('class', 'buttonHome');
    buttonHome.addEventListener('click', goBackToStart);
    if (language === 'Russian') {
        label.innerHTML = 'Вход';
        logInInput.placeholder = 'Введите Ваш логин';
        passwordInput.placeholder = 'Введите Ваш пароль';
    }
};

let getSignInForm = function() {
    console.log('Sign in');
};

let getPersonalArea = function() {
    console.log('PersonalArea');
};

let goBackToStart = function() {
    removeElementByID('logInForm');
};