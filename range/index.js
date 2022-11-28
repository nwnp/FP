/**
 * Range 함수
 *  - 파라미터 값만큼 배열을 만드는 함수
 *
 * reduce, add를 이용해서 list 안에 값을 다 더하는 로직
 */

const { reduce } = require("../FxJS.js");

const log = console.log;
const add = (a, b) => a + b;
const range = (l) => {
  let i = 0;
  let res = [];
  while (i < l) {
    res.push(i);
    i++;
  }
  return res;
};
log(range(5));

let list = range(5);
log(list);
log(reduce(add, list));
