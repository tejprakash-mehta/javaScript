// OOPS concepts consists of 4 sections:
// Encapsulation
// Inheritance
// polymorphism
// Abstraction



class Employee{

setEmpDetails(name, age, designation){
this.name = name;
this.age = age;
this.designation = designation;

}

getEmpName(){
    return this.name;
}

getEmpAge(){
    return this.age;
}

getEmpDesig(){
   return this.designation;
}

}

let emp1 = new Employee();
emp1.setEmpDetails('raghav','40', 'sr.qa engineer');
console.log(emp1.getEmpName());
console.log(emp1.getEmpAge());
console.log(emp1.getEmpDesig()); 