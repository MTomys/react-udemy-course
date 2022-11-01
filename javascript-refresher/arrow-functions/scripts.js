function printMyName(name) {
  console.log(name);
}

printMyName('Michal');

const printMyNameArrow = (name) => {
  console.log(name);
};

console.log('Print my name arrow =>');

printMyNameArrow('Michal arrow');

const multiply = (number) => {
  return number * 5;
};

const multiplyShortcut = (number) => number * 5;

console.log(multiply(5));
