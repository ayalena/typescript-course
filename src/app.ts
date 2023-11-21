interface Person {
  name: string;
  age: number;
  say(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Fenn",
  age: 9,
  say(phrase: string) {
    console.log(phrase + this.name);
  },
};

user1.say("Hi, I'm ");
