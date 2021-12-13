console.log('************** PRACTICE *********************');
console.log('07 - Reminder');

class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(function () {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const reminder = new Reminder(delay: number)