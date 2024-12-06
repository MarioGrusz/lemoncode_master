console.log("************** DELIVERABLE 01 *********************");

const head = <T>([first]: T[]): T | undefined => {
  return first;
};

console.log("HEAD");
console.log(head([1, 2, 3]));
console.log(head(["a", "b", "c"]));
console.log(head([]));

const tail = <T>([, ...rest]: T[]): T[] => {
  return rest;
};

console.log("TAIL");
console.log(tail([1, 2, 3]));
console.log(tail(["a", "b", "c"]));
console.log(tail([]));

const init = <T>(array: T[]): T[] => {
  return array.slice(0, -1);
};

console.log("INIT");
console.log(init([1, 2, 3]));
console.log(init(["a", "b", "c"]));
console.log(init([10]));

const last = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

console.log("LAST");
console.log(last([1, 2, 3]));
console.log(last(["a", "b", "c"]));
console.log(last([10]));
