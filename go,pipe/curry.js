const log = console.log;
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);
log(mult(1)(2));

const mult3 = mult(3);
log(mult3(10));
log(mult3(13));
log(mult3(5));

const filter = curry((f, iter) => {
  let result = [];
  for (const a of iter) {
    if (f(a)) result.push(a);
  }
  return result;
});

const map = curry((f, iter) => {
  let result = [];
  for (const a of iter) {
    result.push(f(a));
  }
  return result;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

const go = (...args) => reduce((a, f) => f(a), args);
const add = (a, b) => a + b;

go(
  products,
  (products) => filter((p) => p.price >= 20000)(products),
  (products) => map((p) => p.price)(products),
  (prices) => reduce(add)(prices),
  log
);
go(
  products,
  filter((p) => p.price >= 20000),
  map((p) => p.price),
  reduce(add),
  log
);

const total_price = pipe(
  map((p) => p.price),
  reduce(add)
);

go(
  products,
  filter((p) => p.price >= 20000),
  total_price,
  log
);
