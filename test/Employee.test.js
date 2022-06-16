class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`${name}`);
    }
    getId() {
        console.log(`${id}`);
    }
    getEmail() {
        console.log(`${email}`);
    }
    getRole() {
        return Employee;
    }
}