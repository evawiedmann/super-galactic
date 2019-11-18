import { Hourglass } from './../src/age.js'

describe('Hourglass', () => {
  test('should take in variables', () => {
    let flippedHourglass = new Hourglass(1,1,1,1,1,1);
    expect(this.currentAge).toEqual(1)
    expect(this.remain).toEqual(1);
    expect(this.remainMercury).toEqual(1);
    expect(this.remainVenus).toEqual(1);
    expect(this.remainMars).toEqual(1);
    expect(this.remainJupiter).toEqual(1);
  });
  test("should return time remaining in years on Earth for ages less than or equal to 80", () => {
    let flippedHourglass = new Hourglass(70, 10);
    expect(flippedHourglass.remainingYearsOnEarth()).toEqual(`You have 10 years left on Earth!`);
  });
  test("should return age in years on Mercury for ages less than or equal to 80", () => {
    let flippedHourglass = new Hourglass(10,);
    expect(flippedHourglass.remainingYearsOnMercury()).toEqual(`You have ${(80 - this.currentAge) * .24} years left on Mercury!`);
  });
  test("should return age in years on Venus for ages less than or equal to 80", () => {
    let flippedHourglass = new Hourglass(70,);
    expect(flippedHourglass.remainingYearsOnVenus()).toEqual(`You have ${(80 - this.currentAge) * .62} years left on Venus!`)
  });
  test("should return age in years on Mars for ages less than or equal to 80", () => {
    let flippedHourglass = new Hourglass(70,);
    expect(flippedHourglass.remainingYearsOnMars()).toEqual(`You have ${(80 - this.currentAge) * 1.88} years left on Mars!`)
  });
  test("should return age in years on Jupiter for ages less than or equal to 80", () => {
    let flippedHourglass = new Hourglass(1,.24, .62, 1.88, 11.68);
    expect(flippedHourglass.remainingYearsOnJupiter()).toEqual(`Your age is ${(80 - this.currentAge) * 11.86} years on Jupiter!`);
  });
});
