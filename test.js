const addon = require('./build/Release/addon');

function sum() {
  let a = 3.14, b = 2.718;
  for (let i = 0; i < 10000000; i++)
  {
    a += b;
  }
  return a;
}

console.time('c++');
console.log(addon.sum());
console.timeEnd('c++');

console.time('js');
console.log(sum());
console.timeEnd('js');