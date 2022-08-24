// Normal Arrow Function with 2 parameter

const add = (first, second) => first + second;

const fullName = (first, last) => first + ' ' + last;

const fullNamePrint = fullName('Abdul', 'Hakim');
console.log(fullNamePrint);                  // N.B. This code is not working

const multiply = (a, b) => a * b;

console.log(multiply(7, 8));

// Normal Arrow Function with Multi parameter

const addAll = (a, b, c, d, e, f) => a + b + c + d + f;

console.log(addAll(1, 2, 3, 4, 5, 6));

// No parameter Arrow Function

//const getPie = () => 

// one parameter Arrow Function 

const doubleIt = (num) => num * 2;

console.log(doubleIt(7));

// one parameter Arrow Function Simple Version

const fiveTimes = num => num * 5;
console.log(fiveTimes(3));

// Multi Line Arrow Function

const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;

    return result;
}

const finalResult = doMath(5, 10, 15);
console.log(finalResult);