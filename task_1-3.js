//Task 1
const usersNames = ["Mike", "Bob", "Nikola"];
let users = {};

for (const name of usersNames) {
  const key = name.toLowerCase();
  users = { ...users, [key]: name };
}

console.log("Task 1", users);

//Task 2
const salaries = {
  mike: 1500,
  Bob: 1800,
  Nikola: 1700,
};
function maxSalary(salaries) {
  let maxName = null;
  let maxSalary = 0;
  const entries = Object.entries(salaries);

  for (const entry of entries) {
    const [name, salary] = entry;
    if (salary > maxSalary) {
      maxName = name;
      maxSalary = salary;
    }
  }
  return maxName;
}
console.log("Task 2", maxSalary(salaries));

//Task 3
const users2 = {
  mike: "Mike",
  bob: "Bob",
  nikola: "Nikola"
}
const { mike: userMike, bob: userBob, nikola: userNikola } = users2;

console.log('Task 3', userMike, userBob, userNikola);
