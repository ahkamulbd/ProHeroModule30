function add1(first, second) {
    const total = first + second;
    return total;
}

const add2 = function (first, second) {
    const total = first + second;
    return total;
}
const add3 = function (first, second) {
    return first + second;
}

// Arrow function

const add4 = (first, second) => first + second;


//const result = add1(10, 20);
//const result = add2(30, 20);
//const result = add2(25, 15);
const result = add2(35, 15);

console.log(result);