export class Person {
  constructor(currentAge, mercury, venus, mars, jupiter) {
    this.currentAge = 1;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.68;
    this.pluto = 248;
    this.planetX = 100;
    this.enterprise = 30;
  };
  mercuryYears() {
    return `Your age is ${this.currentAge * this.mercury} years on Mercury!`;
  };
  venusYears() {
    return `Your age is ${this.currentAge * this.venus} years on Venus!`;
  };
  marsYears() {
    return `Your age is ${this.currentAge * this.mars} years on Mars!`;
  };
  jupiterYears() {
    return `Your age is ${this.currentAge * this.jupiter} years on Jupiter!`;
  };
  plutoYears() {
    return `Your age is ${this.currentAge * this.pluto} years on Pluto!`;
  };
  planetXYears() {
    return `Your age is ${this.currentAge * this.planetX} years on PlanetX!`;
  };
  enterpriseYears() {
    return `Your age is ${this.currentAge * this.enterprise} years on the Enterprise!`;
  };
};

export class Hourglass {
  constructor(currentAge, remain, remainMercury, remainVenus, remainMars, remainJupiter) {
    this.currentAge = currentAge;
    this.remain = remain;
    this.remainMercury = remainMercury;
    this.remainVenus = remainVenus;
    this.remainMars = remainMars;
    this.remainJupiter = remainJupiter;
  };
  remainingYearsOnEarth() {
    if (this.currentAge <= 80) {
      return `You have ${80 - this.currentAge} years left on Earth!`;
    } else {
      return `You are living on borrowed time, ${this.currentAge - 80} years to be exact.`;
    };
  };
  remainingYearsOnMercury() {
    if (this.currentAge <= 80) {
      return `You have ${(80 - this.currentAge) * .24} years left on Mercury!`;
    } else {
      return `You are living on borrowed time, ${(this.currentAge - 80) * .24} years on Mercury to be exact.`;
    };
  };
  remainingYearsOnVenus() {
    if (this.currentAge <= 80) {
      return `You have ${(80 - this.currentAge) * .62} years left on Venus!`;
    } else {
      return `You are living on borrowed time, ${(this.currentAge - 80) * .62} years on Venus to be exact.`;
    };
  };
  remainingYearsOnMars() {
    if (this.currentAge <= 80) {
      return `You have ${(80 - this.currentAge) * 1.88} years left on Mars!`;
    } else {
      return `You are living on borrowed time, ${(this.currentAge - 80) * 1.88} years on Mars to be exact.`;
    };
  };
  remainingYearsOnJupiter() {
    if (this.currentAge <= 80) {
      return `You have ${(80 - this.currentAge) * 11.86} years left on Jupiter!`;
    } else {
      return `You are living on borrowed time, ${(this.currentAge - 80) * 11.86} years on Jupiter to be exact.`;
    };
  };
};
