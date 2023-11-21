abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // console.log(Department.fiscalYear)
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log("IT Dep - ID : " + this.id);
  }
}

//with shorthand
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

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

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("D1", []);
    return this.instance;
  }

  describe() {
    console.log("Acc Dep - ID : " + this.id);
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

// const accounting = new AccountingDepartment("D1", []);

const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "Year end report";

accounting.addEmployee("Fenn");

accounting.describe();
accounting.printEmployeeInfo();

it.describe();

accounting.addReport("Something went wrong");
accounting.printReports();
console.log(accounting.mostRecentReport);

accounting.describe();
