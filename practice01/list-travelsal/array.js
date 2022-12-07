const log = console.log;
const arr = [1, 2, 3];
log("Array-------------");
for (const a of arr) log(a);

// Set
log("Set-------------");
const set = new Set([1, 2, 3]);
for (const a of set) log(a);

// Map
log("Map-------------");
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const a of map) log(a);
for (const a of map.keys()) log(a);
for (const a of map.values()) log(a);
for (const a of map.entries()) log(a);

log(map.keys());
log(map.values());
log(map.entries());

log("Iterator-------------");
const iter1 = set[Symbol.iterator]();
log(iter1.next().value);
const iter2 = map[Symbol.iterator]();
log(iter2.next().value);
const iter3 = arr[Symbol.iterator]();
log(iter3.next().value);
