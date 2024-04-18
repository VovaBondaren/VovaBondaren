banana


const formatDate = date => new Date(date).toLocaleDateString();

30,88,33,3,16,32 / 80
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const squareRoot = num => Math.sqrt(num);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const findSmallestNumber = numbers => Math.min(...numbers);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple - grape

const reverseWords = str => str.split(" ").reverse().join(" ");
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
86 + 11
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
false - 77,96,81,35,78,63,42,0,56,93,51,59,96,11,82,34,88,12,66,93,64,52,21,32,44,80,24,36,77,88,56,23,42,3,81,8,10,50,40,65,73,84,65,81,19,37,3,6,48,4,68,53,77,69,91,1,56,98,60,80,43
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
true / 38,31,39,49,18,80,60,94,34,22,75,6,83,88,11,16,85,85,28,92,65,78,40,58,48,90,89,46,80,40,30,72,44,53,10,35,87,4,67,2,52,34,54,27,0,56,79,45,63,58,38,81,29,42,5,4,50,29,33,32,42,25,94,17,93,6,12,20,65,13,79,52,9,19,90,86,76,51,35
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
true - 5,96,24,57,84,9,80,66,98,77,55,67,2,21,46,36,43,30,99,96,59,36,39,89,65,94,54,6,50,12,32,51,82,17,43,46,12,62,33,25,17,66,40,20,47

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
apple - 19
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getRandomSubset = (array, size) => array.slice(0, size);

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
banana

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

true / kiwi
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const sum = (a, b) => a + b;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
grape


const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
