```js
function one() {
  var a = 1;
  return function two() {
    return function three() {
      console.log(a); // 1
    };
  };
}

console.log(a);
const k = one();
const l = k();
l();
```

```js
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.trace("call stack");
}

one();
```
