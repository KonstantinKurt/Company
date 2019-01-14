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
let clearPage = function() {
    while (doc.body.firstChild) {
        doc.body.removeChild(doc.body.firstChild)
    };
};
let removeElementByID = function(id) { //Вспомогательная функция удаления элемента по Id;
    let element = doc.getElementById(id);
    let parentElement = element.parentNode;
    parentElement.removeChild(element);
};
let getLogInForm = function() { // Функция создает все элементы формы входа на сайт, в случае нажатия кнопки "Log In";
    clearPage();
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
    logInInput.id = 'logInInput';
    let passwordInput = doc.createElement('input');
    form.appendChild(passwordInput);
    passwordInput.setAttribute('class', 'inputLoginForm');
    passwordInput.style.top = '45%';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Enter your Password';
    passwordInput.id = 'passwordInput';
    let buttonOK = doc.createElement('button');
    buttonOK.type = 'button';
    form.appendChild(buttonOK);
    buttonOK.setAttribute('class', 'signIn');
    buttonOK.innerHTML = 'Ok';
    buttonOK.style.color = 'green';
    buttonOK.style.top = '70%';
    buttonOK.style.left = '65%';
    buttonOK.style.height = '15%';
    buttonOK.addEventListener('click', getCheckLogIn);
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
    clearPage();
    let form = doc.createElement('form');
    form.id = 'signInForm';
    doc.body.appendChild(form);
    form.setAttribute('class', 'startFormStyle');
    form.style.height = '80%';
    form.style.width = '35%';
    form.style.top = '10%';
    let label = doc.createElement('label');
    form.appendChild(label);
    label.style.top = '5%';
    label.setAttribute('class', 'startFormLabel');
    label.innerHTML = 'Sign In';
    let logInInput = doc.createElement('input');
    form.appendChild(logInInput);
    logInInput.style.height = '8%';
    logInInput.style.top = '15%';
    logInInput.setAttribute('class', 'inputLoginForm');
    logInInput.type = 'text';
    logInInput.placeholder = 'Enter your Login (required)';
    logInInput.id = 'logInInput';
    logInInput.required = true;
    logInInput.form = 'signInForm';
    logInInput.onchange = () => {
        logInInput.style.borderColor = 'green';
    };
    let firstPasswordInput = doc.createElement('input');
    form.appendChild(firstPasswordInput);
    firstPasswordInput.setAttribute('class', 'inputLoginForm');
    firstPasswordInput.type = 'password';
    firstPasswordInput.placeholder = 'Enter your Password (required)';
    firstPasswordInput.id = 'firstPasswordInput';
    firstPasswordInput.style.top = '25%';
    firstPasswordInput.style.height = '8%';
    firstPasswordInput.required = true;
    firstPasswordInput.form = 'signInForm';
    firstPasswordInput.onchange = () => {
        firstPasswordInput.style.borderColor = 'green';
    };
    let confirmPassword = doc.createElement('input');
    form.appendChild(confirmPassword);
    confirmPassword.setAttribute('class', 'inputLoginForm');
    confirmPassword.type = 'password';
    confirmPassword.placeholder = 'Confirm your Password';
    confirmPassword.id = 'confirmPassword';
    confirmPassword.style.top = '35%';
    confirmPassword.style.height = '8%';
    confirmPassword.required = true;
    confirmPassword.form = 'signInForm';
    confirmPassword.onchange = () => {
        if (firstPasswordInput.value === confirmPassword.value) {
            firstPasswordInput.style.borderColor = 'green';
            confirmPassword.style.borderColor = 'green';
        } else {
            firstPasswordInput.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        }
    };
    let firstNameInput = doc.createElement('input');
    form.appendChild(firstNameInput);
    firstNameInput.setAttribute('class', 'inputLoginForm');
    firstNameInput.type = 'text';
    firstNameInput.placeholder = 'Enter your first name (required)';
    firstNameInput.id = 'firstNameInput';
    firstNameInput.style.top = '45%';
    firstNameInput.style.height = '8%';
    firstNameInput.required = true;
    firstNameInput.form = 'signInForm';
    firstNameInput.onchange = () => {
        firstNameInput.style.borderColor = 'green';
    };
    let lastNameInput = doc.createElement('input');
    form.appendChild(lastNameInput);
    lastNameInput.setAttribute('class', 'inputLoginForm');
    lastNameInput.type = 'text';
    lastNameInput.placeholder = 'Enter your last name (required)';
    lastNameInput.id = 'lastNameInput';
    lastNameInput.style.top = '55%';
    lastNameInput.style.height = '8%';
    lastNameInput.required = true;
    lastNameInput.form = 'signInForm';
    lastNameInput.onchange = () => {
        lastNameInput.style.borderColor = 'green';
    };
    let ageLabel = doc.createElement('label');
    form.appendChild(ageLabel);
    ageLabel.style.position = 'absolute';
    ageLabel.style.top = '65%';
    ageLabel.style.left = '5%';
    ageLabel.innerHTML = 'Input your age';
    let ageInput = doc.createElement('input');
    form.appendChild(ageInput);
    ageInput.type = 'range';
    ageInput.id = 'ageInput';
    ageInput.style.position = 'absolute';
    ageInput.style.top = '64%';
    ageInput.style.height = '8%';
    ageInput.style.width = '50%';
    ageInput.style.left = '29%';
    ageInput.min = '18';
    ageInput.max = '70';
    ageInput.step = '1';
    ageInput.form = 'signInForm';
    let ageValueLabel = doc.createElement('label');
    form.appendChild(ageValueLabel);
    ageValueLabel.style.position = 'absolute';
    ageValueLabel.style.top = '65%';
    ageValueLabel.style.right = '5%';
    ageValueLabel.innerHTML = ageInput.value;
    ageInput.onchange = () => {
        ageValueLabel.innerHTML = ageInput.value;
    };
    let professionInput = doc.createElement('select');
    form.appendChild(professionInput);
    professionInput.setAttribute('class', 'inputLoginForm');
    professionInput.style.top = '75%';
    professionInput.style.height = '8%';
    professionInput.id = 'professionInput';
    professionInput.form = 'signInForm';
    let infoOption = doc.createElement('option');
    professionInput.appendChild(infoOption);
    infoOption.disabled = true;
    infoOption.innerHTML = 'Choose your profession (required)';
    let adminOption = doc.createElement('option');
    professionInput.appendChild(adminOption);
    adminOption.innerHTML = 'Admin';
    let coderOption = doc.createElement('option');
    professionInput.appendChild(coderOption);
    coderOption.innerHTML = 'Coder';
    let designerOption = doc.createElement('option');
    professionInput.appendChild(designerOption);
    designerOption.innerHTML = 'Designer';
    professionInput.onchange = () => {
        if (professionInput.options.selectedIndex != 0) {
            professionInput.style.borderColor = 'green';
        }
    };
    let buttonHome = doc.createElement('button');
    buttonHome.type = 'button';
    form.appendChild(buttonHome);
    buttonHome.setAttribute('class', 'buttonHome');
    buttonHome.addEventListener('click', goBackToStart);
    buttonHome.style.height = '10%';
    buttonHome.style.top = '85%';
    let buttonOK = doc.createElement('input');
    buttonOK.type = 'button';
    form.appendChild(buttonOK);
    buttonOK.setAttribute('class', 'signIn');
    buttonOK.value = 'Ok';
    buttonOK.style.color = 'green';
    buttonOK.form = 'signInForm';
    buttonOK.style.top = '85%';
    buttonOK.style.left = '65%';
    buttonOK.style.height = '10%';
    buttonOK.addEventListener('click', getCheckSighIn);
    if (language === 'Russian') {
        label.innerHTML = 'Регистрация';
        logInInput.placeholder = 'Введите Ваш Логин (обязательное поле)';
        firstPasswordInput.placeholder = 'Введите Ваш пароль (обязательное поле)';
        confirmPassword.placeholder = 'Подтвердите Ваш пароль';
        firstNameInput.placeholder = 'Введите Ваше имя (обязательное поле)';
        lastNameInput.placeholder = 'Введите Вашу фамилию (обязательное поле)';
        ageLabel.innerHTML = 'Возраст';
        infoOption.innerHTML = 'Выберите Вашу профессию (обязательное поле)';
        adminOption.innerHTML = 'Админ';
        coderOption.innerHTML = 'Кодер';
        designerOption.innerHTML = 'Дизайнер';
    }
};
let getCheckSighIn = function() {
    for (let i = 0; i < doc.getElementById('signInForm').childNodes.length; i++) {
        if (doc.getElementById('signInForm').childNodes[i].value == '' && doc.getElementById('signInForm').childNodes[i].required == true) {
            doc.getElementById('signInForm').childNodes[i].style.borderColor = 'red';
            if (language === 'English') {
                alert('Fill all required fields!!');
            } else {
                alert('Заполните все обязательные поля!!');
            }
            return;
        }
    }
    if (doc.getElementById('professionInput').options.selectedIndex == 0) {
        professionInput.focus();
        professionInput.style.borderColor = 'red';
        if (language === 'English') {
            alert('Choose your profession!!');
        } else {
            alert('Выберите Вашу профессию!!');
        }
        return;
    }
    let loginCheck = company.employees.findIndex(x => x.login === doc.getElementById('logInInput').value);
    if (loginCheck != -1) {
        logInInput.focus();
        logInInput.style.borderColor = 'red';
        if (language === 'English') {
            alert('This Login is already exists!');
        } else {
            alert('Данный Логин уже существует!!');
        }
    } else {
        if (firstPasswordInput.value !== confirmPassword.value) {
            confirmPassword.focus();
            if (language === 'English') {
                alert('Passwords are not the same!');
            } else {
                alert('Пароли не совпадают!');
            }
        } else {
            switch (doc.getElementById('professionInput').options.selectedIndex) { //Чтоб не назначать айдишники, проверим содержимое;
                case 1:
                    let newUser = new Admin(
                        logInInput.value,
                        firstPasswordInput.value,
                        firstNameInput.value,
                        lastNameInput.value,
                        ageInput.value,
                        Math.floor(Math.random() * (50000 - 10000)) + 10000,
                        'Admin',
                        'hide somewhere'
                    );
                    company.addEmployee(newUser);
                    try {
                        localStorage.setItem("employees", JSON.stringify(company.employees));
                    } 
                    catch (e) {
                        if (e == QUOTA_EXCEEDED_ERR) {
                            alert('Out of memory!');
                        }
                    }
                    currentUser = company.employees.length - 1;
                    break;
                case 2:
                    let newUser1 = new Coder(
                        logInInput.value,
                        firstPasswordInput.value,
                        firstNameInput.value,
                        lastNameInput.value,
                        ageInput.value,
                        Math.floor(Math.random() * (50000 - 10000)) + 10000,
                        'Coder',
                        'Write code'
                    );
                    company.addEmployee(newUser1);
                    try {
                        localStorage.setItem("employees", JSON.stringify(company.employees));
                    } 
                    catch (e) {
                        if (e == QUOTA_EXCEEDED_ERR) {
                            alert('Out of memory!');
                        }
                    }
                    currentUser = company.employees.length - 1;
                    break;
                case 3:
                    let newUser2 = new Designer(
                        logInInput.value,
                        firstPasswordInput.value,
                        firstNameInput.value,
                        lastNameInput.value,
                        ageInput.value,
                        Math.floor(Math.random() * (50000 - 10000)) + 10000,
                        'Designer',
                        'try to find admin'
                    );
                    company.addEmployee(newUser2);
                    try {
                        localStorage.setItem("employees", JSON.stringify(company.employees));
                    } 
                    catch (e) {
                        if (e == QUOTA_EXCEEDED_ERR) {
                            alert('Out of memory!');
                        }
                    }
                    currentUser = company.employees.length - 1;
                    break;
            }
            getPersonalArea();
        }

    }
};

let getCheckLogIn = function() {
    let loginCheck = company.employees.findIndex(x => x.login === doc.getElementById('logInInput').value);
    let passwordCheck = company.employees.findIndex(x => x.password === doc.getElementById('passwordInput').value);
    doc.getElementById('logInInput').onfocus = function() {
        doc.getElementById('logInInput').style.borderColor = 'black';
    }
    doc.getElementById('passwordInput').onfocus = function() {
        doc.getElementById('passwordInput').style.borderColor = 'black';
    }
    if (loginCheck != -1 && passwordCheck != -1) {
        currentUser = loginCheck;
        getPersonalArea();
    } else {
        if (loginCheck == -1) {
            doc.getElementById('logInInput').style.borderColor = 'red';
            if (language === 'English') {
                alert('Wrong login!!');
            } else {
                alert('Неверный логин!!');
            }
        } else if (passwordCheck == -1) {
            doc.getElementById('passwordInput').style.borderColor = 'red';
            if (language === 'English') {
                alert('Wrong password!!');
            } else {
                alert('Неверный пароль!!');
            }
        }
    }
};


let goBackToStart = function() {
    location.reload();
};