// // Function 1

// function add(first, second) {
//     const total = first + second;
//     return total;
// }

// const result = add(10, 20);
// console.log(result);


// Function 2

function add(first = 0, second = 0) {
    const total = first + second;
    return total;
}

//const result = add(10, 20);
//const result = add(10);
const result = add();
console.log(result);

// Function 3

function fullName(first, second = 'Chy') {
    const name = first + ' ' + second;
    return name;
}

const name = fullName('Aslam');
console.log(name);