const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Fenn",
  age: 10,
  hobbies: ["Draw", "Acro"],
  role: [1, "Favorite Cuz"],
};

// person.role.push("Smarty Pants");
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
