import { Person } from './../src/age.js'

describe('Person', () => {
  test('should take in variables', () => {
    let newPerson = new Person(1,1,1,1,1);
    expect(newPerson.currentAge).toEqual(1);
    expect(newPerson.mercury).toEqual(.24);
    expect(newPerson.venus).toEqual(.62);
    expect(newPerson.mars).toEqual(1.88);
    expect(newPerson.jupiter).toEqual(11.68);
});
  test("should return age in years on Mercury", () => {
    let newPerson = new Person(.24);
    expect(newPerson.mercuryYears()).toEqual(`Your age is ${newPerson.mercury} years on Mercury!`);
  });
  test("should return age in years on Venus", () => {
    let newPerson = new Person(.62);
    expect(newPerson.venusYears()).toEqual(`Your age is ${newPerson.venus} years on Venus!`);
  });
  test("should return age in years on Mars", () => {
    let newPerson = new Person(1.88);
    expect(newPerson.marsYears()).toEqual(`Your age is ${newPerson.mars} years on Mars!`);
  });
  test("should return age in years on Jupiter", () => {
    let newPerson = new Person(11.68);
    expect(newPerson.jupiterYears()).toEqual(`Your age is ${newPerson.jupiter} years on Jupiter!`);
  });
});
