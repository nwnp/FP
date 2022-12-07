const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iter = iterable[Symbol.iterator]();
console.log(iter.next().value, "--");
for (const a of iter) console.log(a);
