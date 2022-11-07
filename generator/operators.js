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

log(...odds(10));
log([...odds(10), ...odds(20)]);

const [head, ...tail] = odds(5);
log(head);
log(tail);

const [a, b, c, ...rest] = odds(15);
log(a);
log(b);
log(c);
log(rest);
