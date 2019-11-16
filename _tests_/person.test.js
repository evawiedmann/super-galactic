import { Person } from './../src/age.js'

describe('Person', () => {
  test('should take in variables', () => {
    let newPerson = new Person(1,.24, .62, 1.88, 11.68);
    expect(newPerson.currentAge).toEqual(1);
    expect(newPerson.mercury).toEqual(.24);
    expect(newPerson.venus).toEqual(.62);
    expect(newPerson.mars).toEqual(1.88);
    expect(newPerson.jupiter).toEqual(11.86);
});
  test("should return age in years on Mercury", () => {
    let newPerson = new Person(1,.24);
    expect(newPerson.currentAge).toEqual(1);
    expect(newPerson.mercuryYears()).toEqual("Your age is .24 years on Mercury!");
  });
  test("should return age in years on Venus", () => {
    let newPerson = new Person(1,.24, .62);
    expect(newPerson.currentAge).toEqual(1);
    expect(newPerson.mercuryYears()).toEqual("Your age is .24 years on Mercury!");
    expect(newPerson.venusYears()).toEqual("Your age is .68 years on Venus!");
  });
  test("should return age in years on Mars", () => {
    let newPerson = new Person(1,.24, .62, 1.88);
    expect(newPerson.currentAge).toEqual(1);
    expect(newPerson.mercuryYears()).toEqual("Your age is .24 years on Mercury!");
    expect(newPerson.venusYears()).toEqual("Your age is .68 years on Venus!");
    expect(newPerson.marsYears()).toEqual("Your age is 1.88 years on Mars!");
  });
  test("should return age in years on Jupiter", () => {
    let newPerson = new Person(1,.24, .62, 1.88, 11.68);
    expect(newPerson.currentAge).toEqual(1);
    expect(newPerson.mercuryYears()).toEqual("Your age is .24 years on Mercury!");
    expect(newPerson.venusYears()).toEqual("Your age is .68 years on Venus!");
    expect(newPerson.marsYears()).toEqual("Your age is 1.88 years on Mars!");
    expect(newPerson.jupiterYears()).toEqual("Your age is 11.68 years on Jupiter!");
  });
});
