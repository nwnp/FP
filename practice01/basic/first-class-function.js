/**
 * '일급'의 뜻
 *  - 값으로 다룰 수 있음
 *  - 변수에 담을 수 있음
 *  - 함수의 인자로 사용될 수 있음
 *  - 함수의 결과로 사용될 수 있음
 */

/**
 * a라는 변수에 값을 담았고, 값으로 다룰 수 있음
 * a라는 변수는 함수의 인자로 사용될 수 있음
 * r이라는 변수는 add()의 결과값을 담아서 결과로 사용되어진다.
 */
const a = 10;
const add = (a) => a + 10;
const r = add(10);
console.log(r);

//---------------------------------------------------
/**
 * 일급함수
 *  - 함수를 값으로 다룰 수 있음
 *  - 함수의 인자로 함수가 사용될 수 있음
 *  - 함수의 결과로 함수가 사용될 수 있음
 */

const add5 = (a) => a + 5;
console.log(add5); // [Function: add5]
console.log(add5(5)); // 10

const f1 = () => () => 1;
console.log(f1); // [Function: f1]
console.log(f1(1)); // [Function]

const f2 = f1();
console.log(f2()); // 1
