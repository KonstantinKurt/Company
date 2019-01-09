class Human{
	constructor(login,password,firstName,lastName,age){
		this.login = login;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
}
class Employee extends Human{
	constructor(login,password,firstName,lastName,age,salary,speciality){
        super(login,password,firstName,lastName,age);
        this.salary = salary;
		this.speciality = speciality;
	}
}

class Admin extends Employee{
	work(){
		return `Hide somewhere and some two boxes of cigarettes`;
	}
}
class Coder extends Employee{
	work(){
		return `Write code`;
	}
}
class Designer extends Employee{
	work(){
		return `try to find an admin`;
	}
}

class Company{
	constructor(){
		this.employees = [];
	}
    addEmployee(employee){
    	this.employees.push(employee);
    }
    removeEmployee(employee){
    	let element  = this.employees.indexOf(employee);
    	if(element != -1){
    		this.employees.splice(element,1);
    	}
    }
}