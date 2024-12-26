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

console.log("HOISTING");

function fn() {
  console.log(a); //declaration hoisted and initialized to undefined
  console.log(g()); //declaration hoisted and initialized to undefined

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a); //"good job"
}

fn();

console.log("INCLUDES");

function includes(array: number[], value: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return false;
}

function includes_02(array: number[], value: number) {
  return array.indexOf(value);
}

console.log(includes_02([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

console.log("PRIMES");

function showPrimes(from: number, to: number): void {
  for (let i = from; i <= to; i++) {
    if (isPrime(i)) {
      console.log(i, "PRIME");
    } else {
      console.log(i, "NOT PRIME");
    }
  }
}

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

showPrimes(1, 100);

console.log("REVERSE TEXT");

function reverseText(text: string) {
  return text.split(" ").reverse().join(" ");
}

console.log(reverseText("Uno dos tres"));

console.log("SUBSET");

function subsets(word: string) {
  const output = [];
  for (let i = 1; i < word.length; i++) {
    const subset = word.slice(i);
    output.push(subset);
  }

  return output;
}

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

console.log("THIS");

var surname = "Pérez";
var person_02 = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      return this.surname;
    },
  },
};

console.log(person_02.wife.getSurname());
//var surnameFunction = person_02.wife.getSurname; // no longer bound to the wife object TypeError
var surnameFunction = person_02.wife.getSurname.bind(person_02); //first solution bind
console.log(surnameFunction());
console.log(surnameFunction.call(person_02)); //second solution passing an object person

console.log("VALUES");

function values(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}

console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
); // [31, 310, "long video", "mp4"]

// Ejemplo:
function Person(name: string) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]

console.log("ZIP");

function zipObject(keys: string[], values: string[]) {
  const result = {};
  for (let i = 0; i < values.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}

console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
);
console.log(zipObject(["spanish", "english", "french"], ["hola"]));

console.log("ZZCRYPT");

var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret: string) {
  let decrypted = "";

  for (let char of secret) {
    let index = cipher.lastIndexOf(char);

    if (index !== -1) {
      decrypted += plain[index];
    } else {
      decrypted += char;
    }
  }

  return decrypted;
}

console.log(decrypt(secret));

console.log("FIBONACCI");

const fib = (n: number) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(3));

console.log("PLAYERS ORDER");

const getPlayersOrder = (players: string[], turns: number) => {
  return [...players.slice(turns), ...players.slice(0, turns)];
};

const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

class Reminder {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  remindMe(delay: number) {
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const newReminder = new Reminder("something");
newReminder.remindMe(1);

console.log("SWAP");

let aaa = "A";
let bbb = "B";
[aaa, bbb] = [bbb, aaa];

// Implementation here, one line, one shot!
console.log(aaa === "B" && bbb === "A" ? "You did it!" : "Keep trying!");
