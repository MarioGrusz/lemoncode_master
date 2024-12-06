console.log("************** DELIVERABLE 03 *********************");

function clone<T>(source: T): T {
  return { ...source };
}

const person = {
  name: "John",
  age: 30,
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Chicago",
    zipCode: "12345",
  },
  hobbies: ["reading", "traveling", "coding"],
};
console.log("CLONE");
console.log("Original object: ", person);
console.log("Cloned object: ", clone(person));

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge<T, U>(source: T, target: U): T & U {
  return { ...target, ...source };
}
console.log("MERGE");
console.log(merge(a, b));
