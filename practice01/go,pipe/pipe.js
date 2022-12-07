const log = console.log;

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const add = (a, b) => a + b;

const filter = (f, iter) => {
  let result = [];
  for (const a of iter) {
    if (f(a)) result.push(a);
  }
  return result;
};

const map = (f, iter) => {
  let result = [];
  for (const a of iter) {
    result.push(f(a));
  }
  return result;
};

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const go = (...args) => reduce((a, f) => f(a), args);
const pipe =
  (...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const f = pipe(
  (a, b) => a + b,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);

// log(f(0, 1));

go(
  products,
  (products) => filter((p) => p.price < 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce(add, prices),
  log
);
