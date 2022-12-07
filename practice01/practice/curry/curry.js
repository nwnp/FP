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

const filter = curry((f, iterator) => {
  let result = [];
  for (const iter of iterator) {
    if (f(iter)) result.push(iter);
  }
  return result;
});

const map = curry((f, iterator) => {
  let result = [];
  for (const iter of iterator) {
    result.push(f(iter));
  }
  return result;
});

const reduce = curry((f, acc, iterator) => {
  if (!iterator) {
    iterator = acc[Symbol.iterator]();
    acc = iterator.next().value;
  }
  for (const iter of iterator) {
    acc = f(acc, iter);
  }
  return acc;
});

const add = (a, b) => a + b;
const go = (...args) => reduce((a, f) => f(a), args);
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

// ------ curry() ------
// map, filter, reduce에 curry를 적용시켜주기 위해 위로 올림
// const curry =
//   (f) =>
//   (a, ..._) =>
//     _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);
log(mult(2)(22));

const mult3 = mult(2);
log(mult3(4));
log(mult3(10));
log(mult3(2));

// 함수조합
const total_price = pipe(
  map((p) => p.price),
  reduce(add)
);

const base_total_price = (predi) => pipe(filter(predi), total_price);

go(
  products,
  base_total_price((p) => p.price >= 20000),
  log
);
