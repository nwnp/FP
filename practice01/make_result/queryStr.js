const log = console.log;
const curry =
  (f) =>
  (a, ...b) => {
    return b.length ? f(a, ...b) : (...b) => f(a, ...b);
  };
const L = {};
L.map = curry(function* (f, iter) {
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    yield f(a);
  }
});
const map = curry((f, iter) => {
  let result = [];
  for (const it of iter) {
    result.push(f(it));
  }
  return result;
});
const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const it of iter) {
    acc = f(acc, it);
  }
  return acc;
});
const go = (...args) => reduce((a, f) => f(a), args);

const join = curry((sep = ",", iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter)
);

const queryStr = (obj) =>
  go(
    obj,
    Object.entries,
    L.map(([k, v]) => `${k}=${v}`),
    join("&")
  );
log(queryStr({ limit: 10, offset: 10, type: "notice" }));
