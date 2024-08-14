// this can be imported in another file
export class Employee {
    // In javascript constructor is a keyword
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display() { 
        console.log(`Id=${this.id},Name=${this.name},Salary=${this.salary}`);
    }
}