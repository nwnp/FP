const { reduce } = require("../FxJS.js");
const add = (a, b) => a + b;
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
log(list);
log(reduce(add, list));
