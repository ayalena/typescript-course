// again: this is not good practice, but is how a specific object is represented in TS
const person: {
  name: string;
  age: number;
} = {
  name: "Fenn",
  age: 10,
};

console.log(person.name);
