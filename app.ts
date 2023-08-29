const person = {
  name: "Fenn",
  age: 10,
  hobbies: ["Draw", "Acro"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
