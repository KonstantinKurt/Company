;
"use strict";
let getPersonalArea = function() {
    clearPage();
    if (language === 'English') {
        alert('Hallo,' + company.employees[currentUser].firstName);
    } else {
        alert('Здравствуйте,' + company.employees[currentUser].firstName);
    }
    let personalAreaLabel = doc.createElement('label');
    doc.body.appendChild(personalAreaLabel);
    personalAreaLabel.setAttribute('class', 'personalAreaLabel');
    if (language === 'English') {
        personalAreaLabel.innerHTML = 'Personal area';
    } else {
        personalAreaLabel.innerHTML = 'Личный кабинет';
    }
    let photoDiv = doc.createElement('div');
    doc.body.appendChild(photoDiv);
    photoDiv.setAttribute('class', 'photoDiv');
    let addPhotoLabel = doc.createElement('label');
    doc.body.appendChild(addPhotoLabel);
    addPhotoLabel.setAttribute('class', 'addPhotoLabel');
    if (language === 'English') {
        addPhotoLabel.innerHTML = 'Add/change photo';
    } else {
        addPhotoLabel.innerHTML = 'Добавить/Изменить фото';
    }
    let personalInfo = doc.createElement('div');
    doc.body.appendChild(personalInfo);
    personalInfo.setAttribute('class', 'personalInfo');
    let personalInfoLabel = doc.createElement('label');
    personalInfo.appendChild(personalInfoLabel);
    personalInfoLabel.setAttribute('class', 'personalAreaLabel');
    personalInfoLabel.style.fontSize = '2vw';
    if (language === 'English') {
        personalInfoLabel.innerHTML = 'Personal information';
    } else {
        personalInfoLabel.innerHTML = 'Личная информация';
    }
    let firstName, lastName, age, salary, speciality, responsibility;
    if (language === 'English') {
        firstName = 'Name';
        lastName = 'Surname';
        age = 'Age';
        salary = 'Salary';
        speciality = 'Speciality';
        responsibility = 'Responsibility';

    } else {
        firstName = 'Имя';
        lastName = 'Фамилия';
        age = 'Возраст';
        salary = 'Зарплата';
        speciality = 'Специализация';
        responsibility = 'Обязанности';
    }
    let personalInfoList = doc.createElement('ol');
    personalInfo.appendChild(personalInfoList);
    personalInfoList.style.position = 'absolute';
    personalInfoList.style.top = '30%';
    let li = doc.createElement('li');
    personalInfoList.appendChild(li);
    li.innerHTML = '&nbsp;<span style=color:green;>' + firstName + "</span>&nbsp;" + company.employees[currentUser].firstName;
    let li1 = doc.createElement('li');
    personalInfoList.appendChild(li1);
    li1.innerHTML = '&nbsp;<span style=color:green;>' + lastName + "</span>&nbsp;" + company.employees[currentUser].lastName;
    let li2 = doc.createElement('li');
    personalInfoList.appendChild(li2);
    li2.innerHTML = '&nbsp;<span style=color:green;>' + age + "</span>&nbsp;" + company.employees[currentUser].age;
    let specialityInfo = doc.createElement('div');
    doc.body.appendChild(specialityInfo);
    specialityInfo.setAttribute('class', 'personalInfo');
    specialityInfo.style.left = '60%';
    let specialityInfoLabel = doc.createElement('label');
    specialityInfo.appendChild(specialityInfoLabel);
    specialityInfoLabel.setAttribute('class', 'personalAreaLabel');
    specialityInfoLabel.style.fontSize = '2vw';
    if (language === 'English') {
        specialityInfoLabel.innerHTML = 'Speciality information';
    } else {
        specialityInfoLabel.innerHTML = 'Информация по специальности';
    }
    let specialityInfoList = doc.createElement('ol');
    specialityInfo.appendChild(specialityInfoList);
    specialityInfoList.style.position = 'absolute';
    specialityInfoList.style.top = '30%';
    let li3 = doc.createElement('li');
    specialityInfoList.appendChild(li3);
    li3.innerHTML = '&nbsp;<span style=color:green;>' + speciality + "</span>&nbsp;" + company.employees[currentUser].speciality;
    let li4 = doc.createElement('li');
    specialityInfoList.appendChild(li4);
    li4.innerHTML = '&nbsp;<span style=color:green;>' + salary + "</span>&nbsp;" + company.employees[currentUser].salary;
    let li5 = doc.createElement('li');
    specialityInfoList.appendChild(li5);
    li5.innerHTML = '&nbsp;<span style=color:green;>' + responsibility + "</span>&nbsp;" + company.employees[currentUser].work;
    let otherUsers = doc.createElement('div');
    doc.body.appendChild(otherUsers);
    otherUsers.setAttribute('class', 'personalInfo');
    otherUsers.style.top = '55%';
    otherUsers.style.width = '60%';
    otherUsers.style.overflow = 'scroll';
    let otherUsersLabel = doc.createElement('label');
    otherUsers.appendChild(otherUsersLabel);
    otherUsersLabel.setAttribute('class', 'personalAreaLabel');
    if (language === 'English') {
        otherUsersLabel.innerHTML = 'All employees information';
    } else {
        otherUsersLabel.innerHTML = 'Информация о всех сотрудниках';
    }
    let otherUsersList = doc.createElement('select');
    otherUsers.appendChild(otherUsersList);
    otherUsersList.id = 'otherUsersList';
    otherUsersList.style.position = 'absolute';
    otherUsersList.style.top = '30%';
    otherUsersList.style.width = '94%';
    otherUsersList.style.height = '70%';
    otherUsersList.style.left = '3%';
    otherUsersLabel.htmlFor = 'otherUsersList';
    otherUsersList.size = company.employees.length;
    for (let i = 0; i < company.employees.length; i++) {
        let option = doc.createElement('option');
        otherUsersList.appendChild(option);
        option.innerHTML =
            firstName.toUpperCase() + " " + company.employees[i].firstName + " " +
            lastName.toUpperCase() + " " + company.employees[i].lastName + " " +
            age.toUpperCase() + " " + company.employees[i].age + " " +
            speciality.toUpperCase() + " " + company.employees[i].speciality + " ";
    }
    let deleteEmployee = doc.createElement('button');
    deleteEmployee.type = 'button';
    doc.body.appendChild(deleteEmployee);
    deleteEmployee.setAttribute('class', 'buttonDeleteEmployee');
    deleteEmployee.addEventListener('click',deleteEmployeeByIndex);
    let deleteAllEmployees = doc.createElement('button');
    deleteAllEmployees.type = 'button';
    doc.body.appendChild(deleteAllEmployees);
    deleteAllEmployees.setAttribute('class', 'buttonDeleteEmployee');
    deleteAllEmployees.style.top = '67%';
    deleteAllEmployees.addEventListener('click',deleteAllEmployeesFunc);
    let buttons = doc.getElementsByTagName('button');
    if(language === 'English'){
        buttons[0].innerHTML = 'Delete';
        buttons[1].innerHTML = 'Delete all';
    }
    else{
        buttons[0].innerHTML = 'Удалить';
        buttons[1].innerHTML = 'Удалить всех';
    }
    let buttonHome = doc.createElement('button');
    buttonHome.type = 'button';
    doc.body.appendChild(buttonHome);
    buttonHome.setAttribute('class', 'buttonHome');
    buttonHome.addEventListener('click', goBackToStart);
    buttonHome.style.height = '12%';
    buttonHome.style.width  = '8%';
    buttonHome.style.top = '85%';
    buttonHome.style.left = '1%';
    
     

};
let deleteEmployeeByIndex = function () {
	let index = doc.getElementById('otherUsersList').selectedIndex;
    let str;
    if(language === 'English'){
        str = 'Do you really want to delete this employee?';
    }
    else{
        str = 'Вы уверены, что хотите удалить данного сотрудника?';
    }
	let checkChoice = confirm(str);
	if(checkChoice){
		company.removeEmployeeByIndex(index);
		localStorage.setItem("employees", JSON.stringify(company.employees));
		doc.getElementById('otherUsersList').remove(index);
	}
};
let deleteAllEmployeesFunc = function(){
    let str;
    if(language === 'English'){
        str = 'Do you really want to clear all Data base?';
    }
    else{
        str = 'Вы уверены, что хотите полностью очистить базу данных?';
    }
    let checkChoice = confirm(str);
    if(checkChoice){
		company.removeAll();
		localStorage.setItem("employees", JSON.stringify(company.employees));
		document.getElementById("otherUsersList").innerHTML = "";
	}
};