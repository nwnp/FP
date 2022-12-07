const log = console.log;

const L = {};
L.range = function* (l) {
  let i = 0;
  while (i < l) {
    yield i;
    i++;
  }
};

const list = L.range(4);
for (const item of list) {
  console.log(item);
}
