const filter = (f, iter) => {
  let result = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(i)) result.push(i);
  }
  return result;
};

const map = (f, iter) => {
  let result = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    result.push(f(i));
  }
  return result;
};

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    acc = f(i, a);
  }
  return acc;
};

const curry =
  (f) =>
  (a, ...b) => {
    return b.length ? f(a, ...b) : (...b) => f(a, ...b);
  };

const curryingFilter = curry((f, iter) => {
  let result = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(i)) result.push(i);
  }
  return result;
});

const curryingMap = curry((f, iter) => {
  let result = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    result.push(f(i));
  }
  return result;
});

const curryingReduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    acc = f(i, acc);
  }
  return acc;
});

const go = (...args) => reduce((f, a) => f(a), args);

const take = (l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
};

module.exports = {
  filter,
  map,
  reduce,
  go,
  curry,
  curryingFilter,
  curryingMap,
  curryingReduce,
  take,
};
