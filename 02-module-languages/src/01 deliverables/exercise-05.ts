console.log("%c************** DELIVERABLE 05 *********************", "color: #8a136a");

class SlothMachine {
  coins: number;
  
  constructor() {
    this.coins = 0; 
  }
  
  randomBoolean(): boolean {
    return Math.random() < 0.5; 
  }

  play() {
    this.coins++;
    let message: string;
    // const game: boolean[] = [this.randomBoolean(), this.randomBoolean(), this.randomBoolean()]; 
    const [machine1, machine2, machine3] = [
      randomBoolean(),
      randomBoolean(),
      randomBoolean()
    ];
    if (machine1 && machine2 && machine3) {
      console.log(`Congratulations!!!. You won ${this.count} coins coins!!`);
      this.count = 0;
    } else {
      console.log(`Good luck next time!!`);
    }
  }
}

const game = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"