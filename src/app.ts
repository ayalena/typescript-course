class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // console.log(Department.fiscalYear)
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// without shorthand
class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

//with shorthand
class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  addEmployee(name: string) {
    if (name === "Charles") {
      return;
    }
    this.employees.push(name);
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Kim");
console.log(employee1);
console.log(Department.fiscalYear);

const it = new ITDepartment("D2", ["Elsie"]);

const accounting = new AccountingDepartment("D1", []);

// console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Year end report";

accounting.addEmployee("Fenn");

accounting.describe();
accounting.printEmployeeInfo();

it.describe();

accounting.addReport("Something went wrong");
accounting.printReports();
console.log(accounting.mostRecentReport);
