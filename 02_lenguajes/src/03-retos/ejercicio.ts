// console.log("************** CHALLENGES *********************");
// console.log(
//   "Use this folder 02 challenges to practice with challenge exercises"
// );
// console.log("You can add new files as long as they are imported from index.ts");

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

run(triggers);

console.log("DEEP_GET");

const deepGet = (obj, ...keys) => {
  if (keys.length === 0) return obj;
  return keys.reduce((acc, key) => acc && acc[key], obj);
};

const myObject_01 = {
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

console.log(deepGet(myObject_01, "x")); // undefined
console.log(deepGet(myObject_01, "a")); // 1
console.log(deepGet(myObject_01, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject_01, "b", "c")); // null
console.log(deepGet(myObject_01, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject_01)); // {a: 1, b: {...}}

console.log("DEEP_SET");

const myObject_02 = {};

function deepSet(value, obj, ...keys) {
  if (keys.length === 0) {
    // If no keys are provided, do nothing
    return;
  }

  let current = obj;
  const lastKey = keys.pop(); // Remove and keep the last key

  for (const key of keys) {
    // Ensure each level is an object
    if (typeof current[key] !== "object" || current[key] === null) {
      current[key] = {};
    }
    current = current[key];
  }

  // Set the final value at the last key
  current[lastKey] = value;
}

deepSet(1, myObject_02, "a", "b");
console.log(JSON.stringify(myObject_02)); // {a: { b: 1}}
deepSet(2, myObject_02, "a", "c");
console.log(JSON.stringify(myObject_02)); // {a: { b: 1, c: 2}}
deepSet(3, myObject_02, "a");
console.log(JSON.stringify(myObject_02)); // {a: 3}
deepSet(4, myObject_02);
console.log(JSON.stringify(myObject_02)); // Do nothing // {a: 3}

console.log("MEMOIZE");

const expensiveFunction = () => {
  console.log("unique call");
  return 3.1415;
};

function memoize(fn) {
  let cache;

  return function () {
    if (cache !== undefined) {
      return cache;
    }
    const result = fn();
    cache = result;
    return result;
  };
}

console.log("MEMOIZE ONE LINER");

function memoizeOneLine(fn) {
  let cache;
  return () => (cache !== undefined ? cache : (cache = fn()));
}

const memoized = memoizeOneLine(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

console.log("MEMOIZE WITH ARGUMENTS");

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

function memoizeWithArguments(fn) {
  const cache = {}; // Store results here

  return function (...args) {
    const key = JSON.stringify(args); // Serialize arguments to create a unique key
    if (cache[key] !== undefined) {
      return cache[key]; // Use the stored result
    }
    const result = fn(...args); // Calculate and store the result
    cache[key] = result;
    return result;
  };
}

const memoizedGreet = memoizeWithArguments(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2

// function slowFunction(num) {
//   console.log("Doing some hard work...");
//   return num * num; // Imagine this takes a long time to calculate
// }

// // A memoized version of the function
// function memoize(fn) {
//   const cache = {}; // Store results here
//   return function (num) {
//     if (cache[num] !== undefined) {
//       return cache[num]; // Use the stored result
//     }
//     const result = fn(num); // Calculate and store the result
//     cache[num] = result;
//     return result;
//   };
// }

// const memoizedFunction = memoize(slowFunction);

// console.log(memoizedFunction(5)); // Logs: "Doing some hard work..." then 25
// console.log(memoizedFunction(5)); // Instantly returns 25 without logging again
