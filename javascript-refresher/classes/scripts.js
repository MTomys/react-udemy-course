class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Michal';
    this.favouriteDrink = 'Coffee';
  }

  printMyName = () => {
    console.log(this.name);
  };
}

let michal = new Person();

michal.printMyName();
michal.printGender();

// modern approach

// will be transformed to use constructor function anyway
class ModernPerson {
  name = 'Michal modern';
  favouriteDrink = 'modern Coffee';
  lastName;

  printInfo = () => {
    console.log(`${this.name}, ${this.favouriteDrink}, ${this.lastName}`);
  };

  setLastName = (lastName) => {
    if (typeof lastName !== 'undefined') {
      this.lastName = lastName;
    }
  };
}

const modernMichal = new ModernPerson();

modernMichal.printInfo();

modernMichal.setLastName('T');

modernMichal.printInfo();
