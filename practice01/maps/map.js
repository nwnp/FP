const log = console.log;

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

let names = [];
for (const p of products) {
  names.push(p.name);
}

log(names);

let prices = [];
for (const p of products) {
  prices.push(p.price);
}

log(prices);

const map = (f, iter) => {
  let names = [];
  for (const a of iter) {
    names.push(f(a));
  }
  return names;
};

log(map((p) => p.name, products));

let m = new Map();
m.set("a", 10);
m.set("b", 20);
log(m);
log(new Map(map(([k, a]) => [k, a * 2], m)));
