const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
/**
 * Iterator Result Object
 * { value: 1, done: false }
 * { value: 2, done: false }
 * { value: 3, done: false }
 * { value: undefined, done: true }
 */
