console.log("************** CHALLENGES *********************");
console.log(
  "Use this folder 02 challenges to practice with challenge exercises"
);
console.log("You can add new files as long as they are imported from index.ts");

console.log("CONSOLE TRACES");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers) => {
  for (const t of triggers) {
    await t();
  }
  console.log("first");
};

//run(triggers);

console.log("DEEP ACCESS");

// function deepGet(obj, target) {
//   for (const key in obj) {
//     if (key === target) return obj[key];

//     if (obj[key] && typeof obj[key] === "object") {
//       const result = deepGet(obj[key], target);
//       if (result !== undefined) return result;
//     }
//   }

//   return undefined;
// }

const deepGet = (obj, ...keys) => {
  if (keys.length === 0) return obj;
  return keys.reduce((acc, key) => acc && acc[key], obj);
};

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}
