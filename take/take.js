const { curry, go, curryingReduce } = require("../FxJS");

const add = (a, b) => a + b;
const log = console.log;
const range = (l) => {
  let i = 0;
  let res = [];
  while (i < l) {
    res.push(i);
    i++;
  }
  return res;
};
const L = {};
L.range = function* (l) {
  let i = 0;
  while (i < l) {
    yield i++;
  }
};

const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

go(range(10000), take(5), curryingReduce(add), log);
go(L.range(10000), take(5), curryingReduce(add), log);
