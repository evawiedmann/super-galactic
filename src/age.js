export class Game {
  constructor(character, setting) {
    this.character = character;
    this.setting = setting;
  }

  whereAmI() {
    return `${this.character} is in the ${this.setting}`;
  }

}

export class Character {
  constructor(type, name, skills) {
    this.type = type;
    this.name = name;
    this.skills = skills;
  }
  chooseType() {
    // return 'You have chosen ' + this.type;
    return `You have chosen ${this.type}`
  }
}

export class Skills extends Character{
  constructor(name, strength, speed, kindness, energy){
    super(name);
    this.strength = parseInt(strength);
    this.speed = parseInt(speed);
    this.kindness = parseInt(kindness);
    this.energy = energy;
  }

  addStrength() {
    return this.strength + 1;
  }

  addSpeed(){
    return this.speed * 2;
  }
}

export class Inventory extends Character {
   constructor(name, weapons, food, medical){
     super(name);
     this.weapons = weapons;
     this.food = food;
     this.medical = medical;
   }
}
