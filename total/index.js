const { go, curringMap, curringReduce, curry } = require("../FxJS.js");

const log = console.log;
log("총 수량, 총 가격");

const products = [
  { name: "반팔티", price: 15000, quantity: 1 },
  { name: "긴팔티", price: 20000, quantity: 2 },
  { name: "핸드폰케이스", price: 15000, quantity: 3 },
  { name: "후드티", price: 30000, quantity: 4 },
  { name: "바지", price: 25000, quantity: 5 },
];

const add = (a, b) => a + b;
const sum = (f, iter) => go(iter, curringMap(f), curringReduce(add));

log(sum((p) => p.quantity, products));
log(sum((p) => p.price * p.quantity, products));

const total_quantity = (products) => sum((p) => p.quantity, products);
log(total_quantity(products));

const total_price = (products) => sum((p) => p.price * p.quantity, products);
log(total_price(products));

const sum2 = curry((f, iter) => go(iter, curringMap(f), curringReduce(add)));

const total_quantity2 = sum2((p) => p.quantity);
log(total_quantity2(products));

const total_price2 = sum2((p) => p.price * p.quantity);
log(total_price2(products));

log(sum2((u) => u.age, [{ age: 30 }, { age: 20 }, { age: 14 }]));
