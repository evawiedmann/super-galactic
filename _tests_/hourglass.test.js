import { Hourglass } from './../src/age.js'

describe('Hourglass', () => {
  test('should take in variables', () => {
    const flippedHourglass = new Hourglass(1,1,1,1,1,1);
    expect(flippedHourglass.currentAge).toEqual(1)
    expect(flippedHourglass.remain).toEqual(1);
    expect(flippedHourglass.remainMercury).toEqual(1);
    expect(flippedHourglass.remainVenus).toEqual(1);
    expect(flippedHourglass.remainMars).toEqual(1);
    expect(flippedHourglass.remainJupiter).toEqual(1);
  });
  test("should return time remaining in years on Earth for ages less than or equal to 80", () => {
    const flippedHourglass = new Hourglass(10);
    expect(flippedHourglass.remainingYearsOnEarth()).toEqual(`You have ${80 - flippedHourglass.currentAge} years left on Earth!`);
  });
  test("should return borrowed time in years on Earth for ages greater than 80", () => {
    const flippedHourglass = new Hourglass(100);
    expect(flippedHourglass.remainingYearsOnEarth()).toEqual(`You are living on borrowed time, ${flippedHourglass.currentAge - 80} years to be exact.`);
  });
  test("should return age in years on Mercury for ages less than or equal to 80", () => {
    const flippedHourglass = new Hourglass(10);
    expect(flippedHourglass.remainingYearsOnMercury()).toEqual(`You have ${(80 - flippedHourglass.currentAge) * .24} years left on Mercury!`);
  });
  test("should return borrowed time in years on Mercury for ages greater than 80", () => {
    const flippedHourglass = new Hourglass(100);
    expect(flippedHourglass.remainingYearsOnMercury()).toEqual(`You are living on borrowed time, ${(flippedHourglass.currentAge - 80) * .24} years on Mercury to be exact.`);
  });
  test("should return age in years on Venus for ages less than or equal to 80", () => {
    const flippedHourglass = new Hourglass(10);
    expect(flippedHourglass.remainingYearsOnVenus()).toEqual(`You have ${(80 - flippedHourglass.currentAge) * .62} years left on Venus!`)
  });
  test("should return borrowed time in years on Venus for ages greater than 80", () => {
    const flippedHourglass = new Hourglass (100);
    expect(flippedHourglass.remainingYearsOnVenus()).toEqual(`You are living on borrowed time, ${(flippedHourglass.currentAge - 80) * .62} years on Venus to be exact.`)
  });
  test("should return age in years on Mars for ages less than or equal to 80", () => {
    const flippedHourglass = new Hourglass(10);
    expect(flippedHourglass.remainingYearsOnMars()).toEqual(`You have ${(80 - flippedHourglass.currentAge) * 1.88} years left on Mars!`)
  });
  test("should return borrowed time in years on Mars for ages greater than 80", () => {
    const flippedHourglass = new Hourglass(100);
    expect(flippedHourglass.remainingYearsOnMars()).toEqual(`You are living on borrowed time, ${(flippedHourglass.currentAge - 80) * 1.88} years on Mars to be exact.`)
  });
  test("should return age in years on Jupiter for ages less than or equal to 80", () => {
    const flippedHourglass = new Hourglass(10);
    expect(flippedHourglass.remainingYearsOnJupiter()).toEqual(`You have ${(80 - flippedHourglass.currentAge) * 11.86} years left on Jupiter!`);
  });
  test("should return borrowed time in years on Jupiter for ages greater than 80", () => {
    const flippedHourglass = new Hourglass(100);
    expect(flippedHourglass.remainingYearsOnJupiter()).toEqual(`You are living on borrowed time, ${(flippedHourglass.currentAge - 80) * 11.86} years on Jupiter to be exact.`);
  });
});
