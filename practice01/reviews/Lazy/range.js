const log = console.log;

const range = (value) => {
  let result = [];
  let i = 0;
  while (i < value) {
    result.push(i);
    i++;
  }
  return result;
};

const list = range(5);
log(list);
