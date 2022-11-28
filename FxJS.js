const filter = (f, iter) => {
  let result = [];
  for (const i of iter) {
    if (f(i)) result.push(i);
  }
  return result;
};

const map = (f, iter) => {
  let result = [];
  for (const i of iter) {
    result.push(f(i));
  }
  return result;
};

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

const curry =
  (f) =>
  (a, ...b) => {
    return b.length ? f(a, ...b) : (...b) => f(a, ...b);
  };

const curryingFilter = curry((f, iter) => {
  let result = [];
  for (const i of iter) {
    if (f(i)) result.push(i);
  }
  return result;
});

const curryingMap = curry((f, iter) => {
  let result = [];
  for (const i of iter) {
    result.push(f(i));
  }
  return result;
});

const curryingReduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const i of iter) {
    acc = f(i, acc);
  }
  return acc;
});

const go = (...args) => reduce((f, a) => f(a), args);

module.exports = {
  filter,
  map,
  reduce,
  go,
  curry,
  curryingFilter,
  curryingMap,
  curryingReduce,
};
