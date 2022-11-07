const log = console.log;

function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(limit, iter) {
  for (const a of infinity(1)) {
    yield a;
    if (a == limit) return;
  }
}

function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

for (const it of odds(40)) log(it);
