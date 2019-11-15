export class Person {
  constructor(currentAge, mercury, venus, mars, jupiter) {
    this.currentAge = currentAge;
    this.mercury = maxAge;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.timeLeft = timeLeft;
    this.timeLeftVenus = timeLeft;
    this.timeLeftMars = timeLeft;
    this.timeLeftJupiter = timeLeft;
  };
  mercuryYears() {
    return `Your age is ${this.currentAge * .24} years on Mercury!`;
  };
  venusYears() {
    return `Your age is ${this.currentAge * .62} years on Venus!`;
  };
  marsYears() {
    return `Your age is ${this.currentAge * 1.88} years on Mars!`;
  };
  jupiterYears() {
    return `Your age is ${this.currentAge * 11.86} years on Jupiter!`;
  };
};

export class Hourglass {
  constructor(remain, remainMercury, remainVenus, remainMars, remainJupiter) {
    this.remain = remain;
    this.remainMercury = remainMercury;
    this.remainVenus = remainVenus;
    this.remainMars = remainMars;
    this.remainJupiter = remainJupiter;
  }
  remainingYearsOnEarth() {
    return `You have (80 - ${this.currentAge}) years left on Earth!`;
  };
  remainingYearsOnMercury() {
    return `Your age is ((80 - ${this.currentAge}) * .24) years on Mercury!`;
  };
  remainingYearsOnVenus() {
    return `You have ((80 - ${this.currentAge}) * .62) years left on Venus!`;
  };
  remainingYearsOnMars() {
    return `You have ((80 - ${this.currentAge}) * 1.88) years left on Mars!`;
  };
  remainingYearsOnJupiter() {
    return `You have ((80 - ${this.currentAge} * 11.86) years left on Jupiter!`;
  };
};
