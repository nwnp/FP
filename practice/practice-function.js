const log = console.log;

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const filter = (f, iter) => {
  let result = [];
  for (const i of iter) {
    if (f(i)) result.push(i);
  }
  return result;
};

const productsOver15000 = filter((p) => p.price > 15000, products);
log(productsOver15000);

const map = (f, iter) => {
  let result = [];
  for (const i of iter) {
    result.push(f(i));
  }
  return result;
};

const mappedProducts = map((p) => p.price, productsOver15000);
console.log(mappedProducts);

const add = (a, b) => a + b;

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const i of iter) {
    acc = f(i, acc);
  }
  return acc;
};

const reducedProducts = reduce(add, mappedProducts);
log(reducedProducts);
