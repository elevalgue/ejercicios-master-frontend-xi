console.log("%c************** DELIVERABLE 05 *********************", "color: green");

class SlothMachine {
  coins: number;
  
  constructor() {
    this.coins = 0; 
  }
  
  play() {
    this.coins++;
    let message: string;
    const randombool1: boolean = Math.random() < 0.5; 
    const randombool2: boolean = Math.random() < 0.5; 
    const randombool3: boolean = Math.random() < 0.5; 
  
    if (randombool1 && randombool2 && randombool3) {
      message = `Congratulations!!!. You won ${this.coins} coins coins!!`; 
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