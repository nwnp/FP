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
const list = L.map((a) => a + 10, [1, 2, 3]);
log(list.next().value);
log(list.next().value);
log(list.next().value);
