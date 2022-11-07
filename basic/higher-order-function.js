/**
 * 고차함수
 *  - 함수를 값으로 다루는 함수
 *  - JS가 일급함수인 것을 이용
 *
 * 종류
 *  - 함수를 인자로 받아서 실행해주는 함수
 *  - 함수를 만들어서 리턴해주는 함수
 */

// 함수를 인자로 받아서 실행해주는 함수
const apply1 = (f) => f(1); // (add) => add(1)
const add = (a) => a + 2;
console.log(apply1(add));

const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};
times(console.log, 3); // 0 1 2
times((a) => console.log(a + 10), 3); // 10 11 12

// 함수를 만들어서 리턴해주는 함수
const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10);
console.log(add10); // [Function] : addMaker(10) => (b) => 10 + b;
console.log(add10(5)); // 15 // addMaker(10) => (5) => 10 + 5;
