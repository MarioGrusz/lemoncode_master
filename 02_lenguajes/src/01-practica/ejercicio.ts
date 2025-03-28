// console.log("************** PRACTICE *********************");
// console.log("Use this folder 00 practice to practice with homework exercises");
// console.log("You can add new files as long as they are imported from index.ts");

// console.log("THE BIGGEST WORD");

// function biggestWord(phrase: string) {
//   let longestWord = "";
//   const stringArray = phrase.split(" ");

//   for (let i = 0; i < stringArray.length; i++) {
//     const word = stringArray[i];
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
// console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

// console.log("PRINT AVERAGE");

// const eso2o = {
//   David: 8.25,
//   Maria: 9.5,
//   Jose: 6.75,
//   Juan: 5.5,
//   Blanca: 7.75,
//   Carmen: 8,
// };

// function getGradeDescription(grade: number) {
//   if (grade === 10) return "Matrícula de Honor";
//   if (grade >= 9) return "Sobresaliente";
//   if (grade >= 7) return "Notable";
//   if (grade >= 6) return "Bien";
//   if (grade >= 5) return "Suficiente";
//   if (grade >= 4) return "Insuficiente";
//   if (grade < 4) return "Muy deficiente";
//   return "Nota inválida";
// }

// function printAverage(classResults: Record<string, number>): string {
//   const grades = Object.values(eso2o);
//   if (grades.length === 0) return;

//   const average =
//     grades.reduce((acc, current) => acc + current, 0) / grades.length;

//   return getGradeDescription(average);
// }

// console.log(printAverage(eso2o));

// console.log("CHECK ARGUMENTS");

// function f(input: string | undefined | null) {
//   let result: string | undefined | null;
//   return input === undefined ? "Unknown" : input === null ? "" : input;
// }

// console.log(f(null));
// console.log(f(undefined));
// console.log(f("string"));

// console.log("EQUAL");

// function isEqual(a: object, b: object): boolean {
//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);

//   if (keysA.length !== keysB.length) return false;

//   for (const key of keysA) {
//     if (!b.hasOwnProperty(key)) return false;
//     if (a[key] !== b[key]) return false;
//   }

//   return true;
// }

// const user_01 = { name: "María", age: 30 };
// const clonedUser_01 = { name: "María", age: 30 };

// console.log(user_01 === clonedUser_01); // false
// console.log(isEqual(user_01, clonedUser_01)); // true

// console.log("DEEP EQUAL");

// function isDeepEqual(a: object, b: object): boolean {
//   if (a === b) return true;
//   if (typeof a !== typeof b) return false;

//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);

//   if (keysA.length !== keysB.length) return false;

//   for (const key of keysA) {
//     if (!keysB.includes(key)) return false;
//     if (!isDeepEqual(a[key], b[key])) return false;
//   }

//   return true;
// }

// var user_02 = {
//   name: "María",
//   age: 30,
//   address: { city: "Málaga", code: 29620 },
//   friends: ["Juan"],
// };
// var clonedUser_02 = {
//   name: "María",
//   age: 30,
//   address: { city: "Málaga", code: 29620 },
//   friends: ["Juan"],
// };

// console.log(isDeepEqual(user_02, clonedUser_02)); // true

// console.log("DICES");

// function diceGame() {
//   let firstDice: number | null;
//   let secondDice: number | null;

//   function play() {
//     firstDice = Math.floor(Math.random() * 6) + 1;
//     secondDice = Math.floor(Math.random() * 6) + 1;
//     console.log(`You rolled: ${firstDice} and ${secondDice}`);

//     if (firstDice === 6 && secondDice === 6) {
//       console.log("🎉 You rolled double 6! You win a prize!");
//     }
//   }

//   function printResult() {
//     if (firstDice === null || secondDice === null) {
//       console.log("You must roll the dice first!");
//     } else {
//       console.log(
//         `Current results: Dice 1: ${firstDice}, Dice 2: ${secondDice}`
//       );
//     }
//   }

//   function reset() {
//     firstDice = null;
//     secondDice = null;
//     console.log("The dice have been reset. Roll again!");
//   }

//   return [play, printResult, reset];
// }

// const [play, printResult, reset] = diceGame();
// play();
// printResult();
// reset();

// console.log("HOISTING");

// function fn() {
//   console.log(a); //declaration hoisted and initialized to undefined
//   console.log(g()); //declaration hoisted and initialized to undefined

//   var a = "good job!";
//   function g() {
//     return a;
//   }
//   console.log(a); //"good job"
// }

// fn();

// console.log("INCLUDES");

// function includes(array: number[], value: number) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) return true;
//   }
//   return false;
// }

// function includes_02(array: number[], value: number) {
//   if (array.indexOf(value)) return true;
//   return false;
// }

// console.log(includes([1, 2, 3], 0)); // false
// console.log(includes_02([1, 2, 3], 3)); // true

// console.log("PRIMES");

// function showPrimes(from: number, to: number): void {
//   for (let i = from; i <= to; i++) {
//     if (isPrime(i)) {
//       console.log(i, "PRIME");
//     } else {
//       console.log(i, "NOT PRIME");
//     }
//   }
// }

// function isPrime(num: number): boolean {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// showPrimes(1, 100);

// console.log("REVERSE TEXT");

// function reverseText(text: string) {
//   return text.split(" ").reverse().join(" ");
// }

// console.log(reverseText("Uno dos tres"));

// console.log("SUBSET");

// function subsets(word: string) {
//   const output = [];
//   for (let i = 1; i < word.length; i++) {
//     const subset = word.slice(i);
//     output.push(subset);
//   }

//   return output;
// }

// console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

// console.log("THIS");

// var surname = "Pérez";
// var person_02 = {
//   name: "Juan",
//   surname: "González",
//   wife: {
//     name: "Ana",
//     surname: "Jiménez",
//     getSurname: function () {
//       return this.surname;
//     },
//   },
// };

// console.log(person_02.wife.getSurname()); // Jiménez
// var surnameFunction_01 = person_02.wife.getSurname; // no longer bound to the wife object TypeError (copying the function to a new variable)
// var surnameFunction_02 = person_02.wife.getSurname.bind(person_02); //first solution bind
// console.log(surnameFunction_02());
// console.log(surnameFunction_01.call(person_02)); //second solution passing an object person

// console.log("VALUES");

// function values(obj: object) {
//   const result = [];
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result.push(obj[key]);
//     }
//   }
//   return result;
// }

// console.log(
//   values({ id: 31, duration: 310, name: "long video", format: "mp4" })
// ); // [31, 310, "long video", "mp4"]

// // Ejemplo:
// function Person(name: string) {
//   this.name = name;
// }

// Person.prototype.walk = function () {
//   console.log("I'm walking");
// };

// var john = new Person("John");
// console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]

// console.log("ZIP");

// function zipObject(keys: string[], values: string[]) {
//   const result = {};
//   for (let i = 0; i < values.length; i++) {
//     result[keys[i]] = values[i];
//   }
//   return result;
// }

// console.log(
//   zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
// );
// console.log(zipObject(["spanish", "english", "french"], ["hola"]));

// console.log("ZZCRYPT");

// var secret =
//   "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
// var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// function decrypt(secret: string) {
//   let decrypted = "";

//   for (let char of secret) {
//     let index = cipher.lastIndexOf(char);

//     if (index !== -1) {
//       decrypted += plain[index];
//     } else {
//       decrypted += char;
//     }
//   }

//   return decrypted;
// }

// console.log(decrypt(secret));

// console.log("FIBONACCI");

// const fib = (n: number) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(3));

// console.log("PLAYERS ORDER");

// const getPlayersOrder = (players: string[], turns: number) => {
//   return [...players.slice(turns), ...players.slice(0, turns)];
// };

// const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
// console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

// class Reminder {
//   text: string;

//   constructor(text: string) {
//     this.text = text;
//   }

//   remindMe(delay: number) {
//     setTimeout(() => {
//       console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
//     }, delay * 1000);
//   }
// }

// const newReminder = new Reminder("something");
// newReminder.remindMe(1);

// console.log("SWAP");

// let aaa = "A";
// let bbb = "B";
// [aaa, bbb] = [bbb, aaa];

// // Implementation here, one line, one shot!
// console.log(aaa === "B" && bbb === "A" ? "You did it!" : "Keep trying!");

// console.log("CLASSIFICATION SUMMARY");

// interface Student {
//   name: string;
//   calcification: number[];
// }

// interface StudentSummary {
//   name: string;
//   highestCalcification: number;
//   averageCalcification: string | number;
// }

// const students = [
//   {
//     name: "Juan",
//     calcification: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34],
//   },
//   {
//     name: "Álvaro",
//     calcification: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01],
//   },
//   {
//     name: "María",
//     calcification: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3],
//   },
//   {
//     name: "Jorge",
//     calcification: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69],
//   },
//   {
//     name: "Mónica",
//     calcification: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48],
//   },
// ];

// const summarizeClassRoom = (studentList: Student[]): StudentSummary[] => {
//   const calculateAverage = (numbers: number[]): number =>
//     parseFloat(
//       (numbers.reduce((sum, num) => sum + num, 0) / numbers.length).toPrecision(
//         3
//       )
//     );

//   return studentList.map((student) => ({
//     name: student.name,
//     highestCalcification: Math.max(...student.calcification),
//     averageCalcification: calculateAverage(student.calcification),
//   }));
// };

// console.log(summarizeClassRoom(students));

// console.log("CURRING");

// const julia = { name: "Julia", surname: "Álvarez", age: 19 };

// function set(propertyName: string) {
//   return function <T>(obj: object, value: T) {
//     return {
//       ...obj,
//       [propertyName]: value,
//     };
//   };
// }

// const setName = set("name");
// const setSurname = set("surname");
// const setAge = set("age");

// console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
// console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
// console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }

console.log("MORSE");
const morseAlphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

function letterToMorse(letter: string): string {
  const morse = morseAlphabet[letter.toLowerCase()];
  if (!morse) return "";
  return morse;
}

function textToMorse(text: string): string {
  const words = text.toLowerCase().split(" ");
  let morseMessage = "";

  words.forEach((word, wordIndex) => {
    const letters = word.split("");

    letters.forEach((letter, letterIndex) => {
      const morse = letterToMorse(letter);
      morseMessage += morse;
      if (letterIndex < letters.length - 1 && morse !== "") {
        morseMessage += "000";
      }
    });
    if (wordIndex < words.length - 1 && word !== "") {
      morseMessage += "0000000";
    }
  });

  return morseMessage;
}

function writeSignal(signal: string): void {
  console.log(signal);
}

function displayMorse(morseText: string): void {
  for (let i = 0; i < morseText.length; i++) {
    const symbol = morseText[i];
    if (symbol === ".") {
      writeSignal("1");
    } else if (symbol === "-") {
      writeSignal("111");
    } else if (symbol === "0") {
      writeSignal("0");
    }
  }
}

const morse = textToMorse("SOS");
displayMorse(morse); //show 1011101011101

// function createMorseTransmitter() {
//   return {
//     transmit: function (message: string): string {
//       const words = message.toLowerCase().split(" ");
//       let morseMessage = "";

//       words.forEach((word, wordIndex) => {
//         const letters = word.split("");
//         letters.forEach((letter, letterIndex) => {
//           const morseCode = morseAlphabet[letter];
//           if (morseCode) {
//             morseMessage += morseCode;

//             if (letterIndex < letters.length - 1) {
//               morseMessage += "000"; // 3-point pause between letters
//             }
//           }
//         });
//         if (wordIndex < words.length - 1) {
//           morseMessage += "0000000"; // 7-point pause between words
//         }
//       });

//       console.log("Message", morseMessage);
//       return morseMessage;
//     },
//   };
// }

// const transmitter = createMorseTransmitter();

// console.log(transmitter.transmit("SOS HELLO"));
