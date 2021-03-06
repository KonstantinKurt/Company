;
"use strict";

let onloads = [];  // Массив функций, которые должны быть обработаны при полной загрузке страницы;
const doc = document; // Кэшируем документ;
let language = 'English'; // Переменная для проверки языка,выбранного пользователем;
const company = new Company();
///////////////////////////
function createStartForm(){    // Функция создает все элементы начальной формы и задает им стили;
  //localStorage.clear();
  if (localStorage.getItem('employees') == null) {
    let array = [];
    localStorage.setItem("employees", JSON.stringify(array));
  }
  company.employees = JSON.parse(localStorage.getItem("employees"));
  let loginCheck = company.employees.findIndex(x => x.login === 'admin');
  if(loginCheck == -1){
    const admin = new Admin('admin','1','TEST','Test',32,99999,'Admin');
    admin.changePhotoURL('styles/images/admin.jpg');
    company.addEmployee(admin);
    localStorage.setItem("employees", JSON.stringify(company.employees));
  }
  
  let form = doc.createElement('form');
  doc.body.appendChild(form);
  form.setAttribute('class','startFormStyle');
  let label = doc.createElement('label');
  form.appendChild(label);
  label.setAttribute('class','startFormLabel');
  label.innerHTML = 'Welcome to our Company';
  let logIn = doc.createElement('button');
  form.appendChild(logIn);
  logIn.setAttribute('class','logIn');
  logIn.type = 'button';
  logIn.innerHTML = 'Log In'.toUpperCase();
  let signIn = doc.createElement('button');
  signIn.type = 'button';
  form.appendChild(signIn);
  signIn.setAttribute('class','signIn');
  signIn.innerHTML = 'Sign in'.toUpperCase();
  let select = doc.createElement('select');
  select.id = 'select';
  doc.body.appendChild(select);
  select.setAttribute('class', 'selectLanguage');
  let optionEng = doc.createElement('option');
  select.appendChild(optionEng);
  optionEng.innerHTML = 'English';
  let optionRus = doc.createElement('option');
  select.appendChild(optionRus);
  optionRus.innerHTML = 'Russian';
  
  //test.classList.add('container-fluid', 'logIn');
};
function startFormButtons(){     // Функция которая обрабатывает кнопки начальной формы и задает им соответствующие
                                 // обработчики событий;
  let elements = doc.getElementsByTagName('button'); 
  for (let i = 0; i < elements.length; i++) {
    switch (elements[i].innerHTML.toUpperCase()) { //Чтоб не назначать айдишники, проверим содержимое;
        case 'LOG IN':
            elements[i].addEventListener('click', getLogInForm);
            break;
        case 'SIGN IN':
            elements[i].addEventListener('click', getSignInForm);
            break;
    }
  }
};
function changeLanguage(){
  let element = doc.getElementById('select');
  element.onchange = getLanguage;
};


onloads.push(createStartForm);
onloads.push(startFormButtons);
onloads.push(changeLanguage);
///////////////////////////
window.onload = function() {
    for (let i in onloads) {
        onloads[i]();
    }
};