interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 9;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + this.name);
  }
}

// let user1: Person;
let user1: Greetable;

user1 = new Person("Fenn");
// user1.name = "Elsie"; --> error bc of readonly!

user1.greet("Hi, I'm ");
console.log(user1);
