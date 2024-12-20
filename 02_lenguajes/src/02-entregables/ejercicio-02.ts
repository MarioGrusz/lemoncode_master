console.log("************** DELIVERABLE 02 *********************");

const concat = <T>(a: T[], b: T[]): T[] => {
  return [...a, ...b];
};

console.log("CONCAT BASIC");
console.log(concat([1, 2], [3, 4]));
console.log(concat(["a", "b"], ["c", "d"]));

const concat_02 = (...args: (string[] | number[])[]) => {
  const newArray = [];
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      newArray.push(...arg);
    }
  });
  return newArray;
};

console.log("CONCAT MORE ARGUMENTS");
console.log(concat_02([1, 2], [3, 4], [5, 6]));
console.log(concat_02(["a", "b"], ["c", "d"], ["e", "f"], ["g", "h"]));
