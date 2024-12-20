console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");

console.log("BIGGEST WORD");
function biggestWord(phrase: string) {
  let longestWord = "";
  const stringArray = phrase.split(" ");

  for (let i = 0; i < stringArray.length; i++) {
    const word = stringArray[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

console.log("PRINT AVERAGE");

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

function getGradeDescription(grade: number) {
  if (grade === 10) return "Matrícula de Honor";
  if (grade >= 9) return "Sobresaliente";
  if (grade >= 7) return "Notable";
  if (grade >= 6) return "Bien";
  if (grade >= 5) return "Suficiente";
  if (grade >= 4) return "Insuficiente";
  if (grade < 4) return "Muy deficiente";
  return "Nota inválida"; // Handles cases where the input is not valid
}

function printAverage(classResults: Record<string, number>): string {
  const grades = Object.values(eso2o);
  if (grades.length === 0) return;

  const average =
    grades.reduce((acc, current) => acc + current, 0) / grades.length;

  return getGradeDescription(average);
}

console.log(printAverage(eso2o));

console.log("CHECK ARGUMENTS");

function f(input: string | undefined | null) {
  var result: string | undefined | null;
  return input === undefined ? "Unknown" : input === null ? "" : input;
}

console.log(f(null));
console.log(f(undefined));
console.log(f("string"));

console.log("EQUAL");

function isEqual(a: object, b: object): boolean {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!b.hasOwnProperty(key)) return false;
    if (a[key] !== b[key]) return false;
  }

  return true;
}

const user_01 = { name: "María", age: 30 };
const clonedUser_01 = { name: "María", age: 30 };

console.log(user_01 === clonedUser_01); // false
console.log(isEqual(user_01, clonedUser_01)); // true

console.log("DEEP EQUAL");

function isDeepEqual(a: object, b: object): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!isDeepEqual(a[key], b[key])) return false;
  }

  return true;
}

var user_02 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser_02 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

console.log(isDeepEqual(user_02, clonedUser_02)); // true

console.log("DICES");

function diceGame() {
  let firstDice: number | null;
  let secondDice: number | null;

  function play() {
    firstDice = Math.floor(Math.random() * 6) + 1;
    secondDice = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled: ${firstDice} and ${secondDice}`);

    if (firstDice === 6 && secondDice === 6) {
      console.log("🎉 You rolled double 6! You win a prize!");
    }
  }

  function printResult() {
    if (firstDice === null || secondDice === null) {
      console.log("You must roll the dice first!");
    } else {
      console.log(
        `Current results: Dice 1: ${firstDice}, Dice 2: ${secondDice}`
      );
    }
  }

  function reset() {
    firstDice = null;
    secondDice = null;
    console.log("The dice have been reset. Roll again!");
  }

  return [play, printResult, reset];
}

const [play, printResult, reset] = diceGame();
play();
printResult();
reset();
