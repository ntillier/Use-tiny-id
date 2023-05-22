# SmartId

[View on npmjs](https://www.npmjs.com/package/smartid) - [View on github](https://github.com/ntillier/SmartId)

**Install**
```
npm install smartid
```

**Use**
```js
const Generator = require('smartid');

const myGenerator = new Generator();

console.log(myGenerator.next());// a
```

## Constructor
`new Generator(characters, options)`
```js
const myGenerator = new Generator('abcd', {
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

## Prototype

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