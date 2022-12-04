const log = console.log;

const L = {};
L.range = function* (l) {
  let i = 0;
  while (i < l) {
    yield i;
    i++;
  }
};

const take = (l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
};

const list = L.range(10000);
console.log(take(5, list));
