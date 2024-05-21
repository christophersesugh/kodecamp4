function useMemo(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

function add(x, y) {
  console.log("Only called at first");
  return x + y;
}

const mem = useMemo(add);

console.log(mem(2, 3));
console.log(mem(2, 3));
console.log(mem(1, 2));
console.log(mem(1, 2));
