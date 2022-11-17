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

module.exports = {
  filter,
  map,
  reduce,
};
