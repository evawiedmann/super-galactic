import { Person } from './../src/age.js'

describe('Person', () => {
  test("should return age in years on Mercury", () => {
    const newPerson = new Person(.24);
    expect(newPerson.mercuryYears()).toEqual(`Your age is ${newPerson.mercury} years on Mercury!`);
  });
  test("should return age in years on Venus", () => {
    const newPerson = new Person(.62);
    expect(newPerson.venusYears()).toEqual(`Your age is ${newPerson.venus} years on Venus!`);
  });
  test("should return age in years on Mars", () => {
    const newPerson = new Person(1.88);
    expect(newPerson.marsYears()).toEqual(`Your age is ${newPerson.mars} years on Mars!`);
  });
  test("should return age in years on Jupiter", () => {
    const newPerson = new Person(11.68);
    expect(newPerson.jupiterYears()).toEqual(`Your age is ${newPerson.jupiter} years on Jupiter!`);
  });
  test("should return age in years on Pluto", () => {
    const newPerson = new Person(248);
    expect(newPerson.plutoYears()).toEqual(`Your age is ${newPerson.pluto} years on Pluto!`);
  });
  test("should return age in years on PlanetX", () => {
    const newPerson = new Person(100);
    expect(newPerson.planetXYears()).toEqual(`Your age is ${newPerson.planetX} years on PlanetX!`);
  });
  test("should return age in years on the Enterprise", () => {
    const newPerson = new Person(30);
    expect(newPerson.enterpriseYears()).toEqual(`Your age is ${newPerson.enterprise} years on the Enterprise!`);
  });
});
