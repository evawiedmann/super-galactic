export class Person {
  constructor(currentAge, timeLeft) {
    this.currentAge = currentAge;
    this.timeLeft = timeLeft;
  }

  whereAmI() {
    return `${this.character} is in the ${this.setting}`;
  }

}

export class Age {
  constructor(type, name, skills) {
    this.type = type;
    this.name = name;
    this.skills = skills;
  }
  chooseType() {
    // return 'You have chosen ' + this.type;
    return `You have chosen ${this.type}`
  }

   }
