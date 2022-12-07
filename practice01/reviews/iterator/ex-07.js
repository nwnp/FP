const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;

    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur >= max };
      },
    };
  },
};

// 이터러블이기 때문에 for..of 문법 가능
for (const num of fibonacci) {
  console.log(num); // 1 2 3 5 8
}

// 스프레드 문법 가능
const arr = [...fibonacci];
console.log(arr); // [1, 2, 3, 5, 8]

// 배열 디스트럭처링 할당 가능
const [first, second, ...rest] = fibonacci;
console.log(first, second, rest); // 1 2 [3, 5, 8]
