const log = console.log;
const arr = [1, 2, 3];
const set = new Set([1, 2, 3]);
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
log(arr);
log(arr[Symbol.iterator]); // values() 함수를 return

const arrIterator = arr[Symbol.iterator]();

log(arrIterator.next().value);
log(arrIterator.next().value);
log(arrIterator.next().value);

const mapIterator = map[Symbol.iterator]();
const mapValuesIterators = map.values();
const mapKeysIterators = map.keys();

log(mapValuesIterators);
log(mapKeysIterators);
// for (const it of map.keys()) log(it);
// for (const it of mapIterators) log(it);
