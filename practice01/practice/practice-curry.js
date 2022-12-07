const {
  go,
  curry,
  curryingFilter,
  curryingMap,
  curryingReduce,
} = require("../FxJS.js");
const { add } = require("../functions.js");

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const mult = curry((a, b) => a * b);
const result1 = mult(2)(34);
const result2 = mult(2, 34);
console.log(result1, result2);

go(
  products,
  curryingFilter((p) => p.price >= 20000),
  curryingMap((p) => p.price),
  curryingReduce(add),
  console.log
);
