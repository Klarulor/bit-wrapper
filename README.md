# BitWrapper for shift boolean array to number

## Installation
```
$ npm install bit-wrapper
```

## Exmaple
```typescript
const array = [true, true, false, true, false, false, true];
const folded = shiftBits(array);
console.log("folded", folded);
const unfolded = unShiftBits(folded, array.length);
console.log("unfolded", unfolded)
console.log("x16 unfolded", unfold(folded, 16))
```