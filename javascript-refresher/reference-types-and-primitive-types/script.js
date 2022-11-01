const number = 1;
const num2 = number;

console.log(num2);

const michal = {
  name: 'Michal',
  age: 21,
};

const michalCloneNotReally = michal;
const michalClone = { ...michal };

console.log(michal);
console.log(michalCloneNotReally);

michal.name = 'asd';

console.log(michal);
console.log(michalCloneNotReally);
