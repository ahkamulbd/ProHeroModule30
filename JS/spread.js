const max = Math.max(12, 85, 999, 78);
//console.log(max);

const numbers = [12, 85, 999, 78];

//const largest = Math.max(numbers);
const largest = Math.max(...numbers);

//console.log(numbers);
//console.log(largest);

console.log(...numbers);

console.log(...largest);  // N.B. Largest value is not found in print

const numbers2 = numbers;
numbers.push(55);
numbers2.push(7777);

console.log(numbers);
console.log(numbers2);

