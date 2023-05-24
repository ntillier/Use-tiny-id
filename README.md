# Use Tiny Id

[View on npmjs](https://www.npmjs.com/package/use-tiny-id) - [View on github](https://github.com/ntillier/Use-tiny-id)

`use-tiny-id` is an npm package designed to quickly create incremental IDs, so that all IDs are unique. You can run `test.js` to get an idea of the performance, which is similar to [nanoid](https://github.com/ai/nanoid) for generating a 21 character id.

**Install**
```
npm install use-tiny-id
```

**Use**
```js
const Generator = require('use-tiny-id');

const myGenerator = new Generator();

console.log(myGenerator.next());// a
```

## Constructor
`new Generator(characters, options)`
```js
// creates a simple id generator
const myGenerator = new Generator();

// creates a generator with a custom alphabet
const myGenerator = new Generator('abcd');

// creates a generator with a custom alphabet and a config
const myGenerator = new Generator('abcd', {
  numberOfCharacters: 10,
  lastGeneratedId: 'aaaaaaaaac'
});

// creates a generator with a simple config
const myGenerator = new Generator();
myGenerator.config({
  numberOfCharacters: 10,
  lastGeneratedId: 'aaaaaaaaac'
});
```

**Type definition**
```ts
type UniqueIdGeneratorOptions = {
  numberOfCharacters?: number;
  lastGeneratedId?: string;
};
```

## Methods

### config(config)
Changes the generator's configuration
```js
myGenerator.config({
  numberOfCharacters: 10,
  lastGeneratedId: 'aaaaaaaaac'
});
```

**Type definition**
```ts
type UniqueIdGeneratorOptions = {
  numberOfCharacters?: number;
  lastGeneratedId?: string;
};
```

### count()
Returns the number of generated ids
```ts
const count: number = myGenerator.count();
```

### increment(number)
Increments the id. It returns the generators instance, so you can chain many calls.
```ts
myGenerator.increment();

myGenerator
  .increment()
  .increment();
```

### next()
Returns the current id and increment it
```ts
const id: string = myGenerator.next();
```

### current()
Returns the current id without incrementing it
```ts
const id: string = myGenerator.current();
```

### Properties

### chars
The characters used to generate the ids.
```js
// 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' by default
console.log(myGenerator.chars);
```

### status
An array of numbers, which is the current state of the id generator.
```js
// [0, ...]
console.log(myGenerator.status);
```