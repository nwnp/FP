const log = console.log;

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const filter = (f, iterator) => {
  let result = [];
  for (const iter of iterator) {
    if (f(iter)) result.push(iter);
  }
  return result;
};

const map = (f, iterator) => {
  let result = [];
  for (const iter of iterator) {
    result.push(f(iter));
  }
  return result;
};

const reduce = (f, acc, iterator) => {
  if (!iterator) {
    iterator = acc[Symbol.iterator]();
    acc = iterator.next().value;
  }
  for (const iter of iterator) {
    acc = f(acc, iter);
  }
  return acc;
};

const add = (a, b) => a + b;

log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price >= 20000, products)
    )
  )
);

const go = (...args) => reduce((a, f) => f(a), args);
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const f = pipe(
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);

go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  log
);

log(f(0, 1));

go(
  products,
  (products) => filter((p) => p.price >= 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce(add, prices),
  log
);
