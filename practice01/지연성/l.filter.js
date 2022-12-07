const log = console.log;

const L = {};
L.range = function* (l) {
  let i = 0;
  while (i < l) {
    yield i++;
  }
};
L.map = function* (f, iter) {
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    yield f(a);
  }
};
L.filter = function* (f, iter) {
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(a)) yield a;
  }
};

const list = L.filter((a) => a % 2, L.range(10));
log(list.next().value);
log(list.next().value);
log(list.next().value);
log(list.next().value);
log(list.next().value);
