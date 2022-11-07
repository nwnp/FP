const log = console.log;

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0
          ? { value: undefined, done: true }
          : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

const arr = [1, 2, 3];
let iter = arr[Symbol.iterator]();
iter.next();
for (const a of iter) log(a);
