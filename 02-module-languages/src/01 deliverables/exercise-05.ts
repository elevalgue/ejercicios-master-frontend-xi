console.log("%c************** DELIVERABLE 05 *********************", "color: green");

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
    const game: boolean[] = [this.randomBoolean(), this.randomBoolean(), this.randomBoolean()]; 
    if (game) {
      message = `Congratulations!!!. You won ${this.coins} coins coins!!`; 
      console.log(`Congratulations!!!. You won ${this.coins} coins coins!!`);
      this.coins = 0;
    } else {
      message = `Good luck next time!!`; 
    }
    console.log(message);
  }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"