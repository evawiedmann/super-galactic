import { Hourglass } from './../src/age.js'

describe('Hourglass', () => {
  test('should take in variables', () => {
    let flippedHourglass = new Hourglass(1,1,1,1,1,1);
    expect(flippedHourglass.remain).toEqual(1);
    expect(flippedHourglass.remainMercury).toEqual(1);
    expect(flippedHourglass.remainVenus).toEqual(1);
    expect(flippedHourglass.remainMars).toEqual(1);
    expect(flippedHourglass.remainJupiter).toEqual(1);
  });
  test("should return time remaining in years on Earth", () => {
    let flippedHourglass = new Hourglass(70);
  expect(flippedHourglass.remainingYearsOnEarth()).toEqual('You have 10 years left on Earth!');
  });
  test("should return age in years on Mercury", () => {
    let flippedHourglass = new Hourglass(70,);
    expect(flippedHourglass.remainingYearsOnEarth()).toEqual('You have 10 years left on Earth!');
    expect(flippedHourglass.remainingYearsOnMercury()).toEqual('You have 2.4 years left on Mercury!');
  });
  test("should return age in years on Venus", () => {
    let flippedHourglass = new Hourglass(70,);
    expect(flippedHourglass.remainingYearsOnEarth()).toEqual('You have 10 years left on Earth!');
    expect(flippedHourglass.remainingYearsOnMercury()).toEqual('You have 2.4 years left on Mercury!');
    expect(flippedHourglass.remainingYearsOnVenus()).toEqual('You have 6.8 years left on Venus!')
  });
  test("should return age in years on Mars", () => {
    let flippedHourglass = new Hourglass(70,);
    expect(flippedHourglass.remainingYearsOnEarth()).toEqual('You have 10 years left on Earth!');
    expect(flippedHourglass.remainingYearsOnMercury()).toEqual('You have 2.4 years left on Mercury!');
    expect(flippedHourglass.remainingYearsOnVenus()).toEqual('You have 6.8 years left on Venus!')
  });
  test("should return age in years on Jupiter", () => {
    let flippedHourglass = new Hourglass(1,.24, .62, 1.88, 11.68);
    expect(flippedHourglass.jupiterYears()).toEqual("Your age is 11.68 years on Jupiter!");
  });
});
