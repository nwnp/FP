const { reduce, filter, map } = require("../../FxJS.js");

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const go = (...args) => reduce((f, a) => f(a), args);

go(
  products,
  (products) => filter((p) => p.price >= 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce((a, b) => a + b, prices),
  console.log
);
