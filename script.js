// complete this js code
//function Person(name, age) {}

//function Employee(name, age, jobTitle) {}

// Do not change code below this line


// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Define the Employee class, inheriting from Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Test the classes
const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is John, I am 30 years old.

const employee1 = new Employee("Bob", 30, "Manager");
employee1.greet(); // Output: Hello, my name is Alice, I am 25 years old.
employee1.jobGreet(); // Output : Hello, my name is Bob, I am 30 years old, and my job title is Manager.

window.Person = Person;
window.Employee = Employee;

