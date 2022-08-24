const text1 = 'First Line of Text';
const text2 = "Second Line of Text";
const text3 = `Third Line of Text`;

const text4 = `First Line of Text
Second Line of Code
Third Line of String`;  // i.e. backtick is used to write multi-line without using \n

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);

// Other Used of Backtick as a ES 6 Feature

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 144];

const summary = 'Sum of ' + a + ' and ' + b + ' is ' + (a + b);

console.log(summary);

const newSummary = `Total of ${a} and ${b} is ${a + b}`;
console.log(newSummary);

const newSummaryArray = `Addition Result of ${a} and ${nums.length} is ${a + b}`;

console.log(newSummaryArray);