import { Person } from './../src/age.js'

describe('Person', () => {
  test('should take in variables', () => {
    var newPerson = new Person(1,.24, .62, 1.88, 11.68, 2);
    expect(newPerson.currentAge).toEqual(1);
    expect(newPerson.mercury).toEqual(.24);
    expect(newPerson.currentAge).toEqual(.62);
    expect(newPerson.currentAge).toEqual(1.88);
    expect(newPerson.currentAge).toEqual(11.86);
    expect(newPerson.timeLeft).toEqual(2);

})
  test("should return age in Mercury years", () => {
    var newMercury = new Character (10,2.4);
    expect(newMercury.mercuryYears()).toEqual("You have chosen Mage");
  })
});
