class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName; 
        this.grade = year;
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
}
}

let firstStudent = new Student("Colt", "Steel", "4");
let secondStudent = new Student("Weaponized", "Ex", "Best");
