enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "Fenn",
  age: 10,
  hobbies: ["Draw", "Acro"],
  role: Role.ADMIN,
};

// person.role.push("Smarty Pants");
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
