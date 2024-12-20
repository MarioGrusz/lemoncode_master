console.log("************** CHALLENGES *********************");
console.log(
  "Use this folder 02 challenges to practice with challenge exercises"
);
console.log("You can add new files as long as they are imported from index.ts");

console.log("CONSOLE TRACES");
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers: (() => Promise<void>)[]) => {
  for (const t of triggers) {
    await t();
  }
  console.log("first");
};

run(triggers);

console.log("DEEP_GET");

const deepGet = (
  obj: { a: number; b: { c: any; d: { e: number; f: { g: string } } } },
  ...keys: string[]
) => {
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

function deepSet(value: number, obj: {}, ...keys: string[]) {
  if (keys.length === 0) {
    return;
  }

  let current = obj;
  const lastKey = keys.pop();

  for (const key of keys) {
    if (typeof current[key] !== "object" || current[key] === null) {
      current[key] = {};
    }
    current = current[key];
  }
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

console.log("FLATTEN ARRAY");

function flattenArray<T>(array: T[]): T[] {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (Array.isArray(element)) {
      const flattenSubarray = flattenArray(element);
      output.push(...flattenSubarray);
    } else {
      output.push(element);
    }
  }

  return output;
}

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
console.log(flattenArray(sample));

console.log("MEMOIZE");

const expensiveFunction = () => {
  console.log("unique call");
  return 3.1415;
};

function memoize(fn: () => number) {
  let cache: number | undefined;

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

function memoizeOneLine(fn: () => number) {
  let cache: number | undefined;
  return () => (cache !== undefined ? cache : (cache = fn()));
}

const memoized = memoizeOneLine(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

console.log("MEMOIZE WITH ARGUMENTS");

let count = 0;
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

function memoizeWithArguments(fn: (...args: any[]) => string) {
  const cache = {};

  return function (...args: any) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    }
    const result = fn(...args);
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

console.log("TREE");

class TreeNode<T> {
  value: T;
  children: TreeNode<T>[];

  constructor(value: T) {
    this.value = value;
    this.children = [];
  }

  addChild(child: TreeNode<T>) {
    this.children.push(child);
  }

  removeChild(value: T) {
    this.children = this.children.filter((child) => child.value !== value);
  }
}

class Tree<T> {
  root: TreeNode<T> | null;

  constructor(value: T) {
    this.root = new TreeNode(value);
  }
}

const tree = new Tree<string>("root");
const child1 = new TreeNode("child1");
const child2 = new TreeNode("child2");
const grandChild = new TreeNode("grandChild");

console.log("UNDERSTANDING JS");

console.log("----------------- 1");

const x = NaN;
console.log(x === x);

console.log("----------------- 2");

const isNaNValue = (v: any) => Number.isNaN(v);

console.log(isNaNValue(NaN)); // true
console.log(isNaNValue(42)); // false
console.log(isNaNValue("hello")); // true

console.log("----------------- 3");

console.log(!isNaNValue(x) && x !== x); // true
