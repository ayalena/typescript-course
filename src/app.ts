class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Fenn");
accounting.employees[1] = "Elsie";

accounting.describe();
accounting.printEmployeeInfo();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
