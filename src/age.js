export class Person {
  constructor(currentAge, mercury, venus, mars, jupiter, timeLeft) {
    this.currentAge = currentAge;
    this.mercury = maxAge;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.timeLeft = timeLeft;
  }

  mercuryYears() {
    return `Your age is ${this.currentAge * .24} years on Mercury!`;
  }
  venusYears() {
    return `Your age is ${this.currentAge * .62} years on Venus!`;
  }
  marsYears() {
    return `Your age is ${this.currentAge * 1.88} years on Mars!`;
  }
  jupiterYears() {
    return `Your age is ${this.currentAge * 11.86} years on Jupiter!`;
  }
  remainingYears() {
    return `Your age is ${this.currentAge * 2} years on Mercury!`;
  }
// }
//
// export class Age {
//   constructor(type, name, skills) {
//     this.type = type;
//     this.name = name;
//     this.skills = skills;
//   }
//   chooseType() {
//     // return 'You have chosen ' + this.type;
//     return `You have chosen ${this.type}`
//   }
//
//    }