const { filter } = require("../../FxJS");

const log = console.log;

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const test =
  (f) =>
  (first, ...list) => {
    if (list.length) {
      return f(first, ...list);
    } else {
      return (...list) => f(first, ...list);
    }
  };
const CurriyingFilter = test(filter);
log(
  CurriyingFilter(
    products,
    CurriyingFilter((p) => p.price >= 20000),
    log()
  )
);
