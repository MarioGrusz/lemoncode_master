console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  coin: number;
  constructor() {
    this.coin = 0;
  }

  play() {
    this.coin++;

    const randomBooleans = Array.from({ length: 3 }, () => Math.random() < 0.5);

    if (randomBooleans.some((element) => element === false)) {
      console.log("Good luck next time!!");
      return;
    }

    console.log(`Congratulations!!!. You won ${this.coin} coins!!`);
    this.coin = 0;
  }
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!""
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
