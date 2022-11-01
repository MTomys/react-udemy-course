// extracts array elements or object properties and stores them in variables

// with arrays

[a, b] = ['Hello', 'Max'];

console.log(a);
console.log(b);

// with objects

const michal = {
  michalsName: 'Michal',
  age: 21,
};

const { michalsName, age } = michal;
console.log(michalsName);
console.log(age);

console.log(michal);
console.log({ michal, name: 'asd' });
