// you can test the generator speed by running this file

const Generator = require('./lib');
const crypto = require('crypto');
const { nanoid } = require('nanoid');

const myGenerator = new Generator('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', {
  numberOfCharacters: 21 // 1 is the default
});

// The count feature test
console.log('Ids count', myGenerator.count());
console.log('Ids count after 2 increments', myGenerator.increment().increment().count());

const average = 10;

function runTest(fn) {
  let i = 0;

  let date = Date.now();

  while (Date.now() <= date + 1000) {
    fn();
    i++;
  }

  return i;
}

function testLibrary (name, callback) {
  const values = [];

  for (let i = 0; i < average; i++) {
    values.push(runTest(callback));
  }

  let sum = 0;

  for (var i of values) {
    sum += i;
  }

  console.log(name, sum / values.length, 'op/seconds')
}

console.log('\nRunning tests (10s per test)\n')

/**
 * It will take 30 seconds to run this tests
 */
testLibrary('Generator increment', () => myGenerator.increment());
testLibrary('Generator          ', () => myGenerator.next());
testLibrary('crypto.randomUUID  ', () => crypto.randomUUID());
testLibrary('nanoid             ', () => nanoid());