console.log('spread-rest');

// spread ... Used to split up array elements OR object properties

let someArray = [1, 2, 3, 4, 5];

let newArray = [...someArray, 'end'];

let obj = {
  name: 'Michael',
  age: 21,
};

let improvedObject = {
  ...obj,
  index: 2,
};

console.log(someArray);
console.log(newArray);
console.log(obj);
console.log(improvedObject);

// rest ... Used to merge a list of function arguments into an array

const filter = (...args) => {
  return args.filter((arg) => arg.includes('abc'));
};

const strings = ['abc2', 'abc', 'asd', 'aaa'];

const filteredStrings = filter('abc2', 'abc', 'asd', 'aaa');

console.log(filteredStrings);
