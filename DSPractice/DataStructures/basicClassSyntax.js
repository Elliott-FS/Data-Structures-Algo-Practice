class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName; 
        this.grade = year;
        this.tardies = 0;
    }

    static enrollStudents(...Students){
        // maybe email here
        // static used to add utility functions
        // that come as a default meathod on 
        // all intances of class
        // you would call this by saying Student.enroll student rather 
        // than firstStudent.enrolStudents
    }


    markLate(){
        this.tardies += 1;
        return `Wow ${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
}
}

let firstStudent = new Student("Colt", "Steel", "4");
let secondStudent = new Student("Weaponized", "Ex", "Best");
