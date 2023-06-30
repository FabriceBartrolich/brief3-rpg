// La class Hero
class Hero {
  private name: string;
  private power: number;
  private life: number;
  weapon!: Weapon 

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }

  attack(opponent: Hero) : void {
    opponent.life -= this.power;
    console.log(`${this.name} attaque ${opponent.name}`);
    console.log(`La vie de ${opponent.name} est maintenant de ${opponent.life}`);
    console.log(`${opponent.name} attaque ${this.name}`);
    console.log(`La vie de ${this.name} est maintenant de ${this.life}`);
  }

  isAlive() : boolean {
    return this.life > 0; 
  }

  getprivateName(): string {
    return this.name;
  }

  getprivatePower(): number {
    return this.power;
  }

  getprivateLife(): number {
    return this.life;
  }

  setprivateLife(value: number) {
    this.life = value;
  }
}



// Création de mes 2 personnages
// const hero1 = new Hero("Grog", 15, 100);
// const hero2 = new Hero("Vax", 20, 80);
// console.log("vie Le nombre de points de vie restants du",hero2);



// La class Weapon
class Weapon {
  name: string;

  constructor(name: string) {
this.name = name;
  }
}

////////////////////////////////////////////////////////

// Les 3 classes enfants

// 1. HeroAxe
class HeroAxe extends Hero {

  constructor(name: string, power: number, life: number, weapon = Weapon) {
    super(name, power, life);
    this.weapon = new Weapon("Axe");
  }

  attack(opponent: Hero) {
    if (opponent instanceof HeroSword) {
      console.log("coucou");
        opponent.setprivateLife(opponent.getprivateLife() - (this.getprivatePower()*2));
    } else {
              super.attack(opponent);
    }
  }
}



// 2. HeroSword
class HeroSword extends Hero {

    constructor(name: string, power: number, life: number, weapon = Weapon) {
    super(name, power, life);
      this.weapon = new Weapon("Sword");
  }

  attack(opponent: Hero) {
    if (opponent instanceof HeroSpear) {
        opponent.setprivateLife(opponent.getprivateLife() - this.getprivatePower()*2);
    } else {
        super.attack(opponent);
    }
  }
}




// 3. HeroSpear
class HeroSpear extends Hero {

    constructor(name: string, power: number, life: number, weapon = Weapon) {
    super(name, power, life);
    this.weapon = new Weapon("Spear");
  }

  attack(opponent: Hero) {
    if (opponent instanceof HeroAxe) {
        opponent.setprivateLife(opponent.getprivateLife() - this.getprivatePower()*2);
    } else {
        super.attack(opponent);
    }
  }
}

// L'instance de HeroSpear
const hero5:HeroSpear = new HeroSpear("Hans", 12, 90, Weapon);
// console.log(hero5);



////////////////////////////////////////////////////////

// L'instance de HeroAxe et de Herosword
const hero3:HeroAxe = new HeroAxe("Flint", 10, 120, Weapon);
const hero4:HeroSword = new HeroSword("Shendor", 25, 95, Weapon);

// Affrontement de hero3 (Flint) vs hero4 (Shendor)
// J'ai modifié les valeurs power et life des 2 personnages jusqu'à obtenir un draw
while (hero3.isAlive() && hero4.isAlive()) {
  hero3.attack(hero4);
  hero4.attack(hero3);
} 

if (!hero3.isAlive() && !hero3.isAlive()){
console.log("It's a draw !");
} else if (hero3.isAlive()) {
  console.log(`${hero3.getprivateName()} wins !`);
} else {
  console.log(`${hero4.getprivateName()} wins !`);
}






 