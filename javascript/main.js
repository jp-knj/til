function makeFizzBuzzIterable(max) {
  return {
    [Symbol.iterator]() {
      return makeFizzBuzzIterator(max)
    }
  }
}

function makeFizzBuzzIterator(max) {
  let count = 0;
  return {
    next() {
      count++
      const done = max <= count
      if (count % 6 === 0) {
        return { value: "FizzBuzz", done }
      } else if (count % 2 === 0) {
        return { value: "Fizz", done }
      } else if (count % 3 === 0) {
        return { value: "Buzz", done }
      } else {
        return { value: count, done }
      }
    }
  }
}

for(item of makeFizzBuzzIterable(7)){ console.log(item)}

[1, 4, 5].map(n => n * n).reduce((sum, n) => sum += n);

function* fibonacci(){
  let n0 = -1
  let n1 = 1
  while(true){
   [n0, n1] = [n1, n0 + n1]
   yield n1
  }
}

let result = []
let count = 10
for ( let n of fibonacci()){
  result.push(n)
  if(--count === 0) break
}

JSON.parse("true")

ary = JSON.parse("[1, 1,[2, 5], 5]")

obj = JSON.parse('{"id": 1, "name": "Echoes", "power":["E", "C", "B"]}');

let binary = new Int32Array([-570238871, -1738642577]).buffer
let i16 = new Int16Array(binary)
String.fromCharCode(...i16)

const deepCopy = obj => {
  let dup
  if (Array.isArray(obj)) {
    dup = obj.map(e => deepCopy(e))
  } else if (typeof obj === "object") {
    dup = {}
    for (let [k, v] of Object.entries()) {
      dup[k] = deepCopy(v)
    }
  } else {
    dup = obj
  }
  return dup
}

// let start = Date.now()
// while (true) {
//   if (Date.now() - start > 10 * 1000) break
// }

// console.log("10秒経過！")

document.open()
document.write("<button id='btn'>ボタン</button>");

let button = document.getElementById("btn");

let callbackFunc = () => console.log("クリックされました");
button.addEventListener("click", callbackFunc);

let promise = asyncFunc()
promise.then(callbackFunc)

function waitFor(msec) {
  return new Promise(resolve => {
    setTimeout(resolve, msec)
  })
}

waitFor(5000).then(() => console.log("実行完了"))

waitFor(Math.random() * 5000).then(() => {
  console.log("処理A")
  return waitFor(Math.random() * 5000)
}).then(()=> {
  console.log("処理B")
  return waitFor(Math.random() * 5000)
}).then(() => {
  console.log("処理C")
})

Promise.resolve(42)
  .then(() => console.log("first"))
  .catch(() => console.log("first catch"))
  .then(() => console.log("second"))
  .then(() => {
    console.log("first error")
    return Promise.reject()
  })
  .then(() => "third")
  .then(() => console.log("fourth"))
  .catch(() => console.log("second catch"))
  .then(() => console.log("fifth"))
  .catch(() => console.log("third catch"))
  .finally(() => console.log("first finally"))

// ary = [3, 4, 5];
// aryProxy = new Proxy(ary, {})
// aryProxy[1]
// aryProxy.length

// aryProxy[0] = 1;
// aryProxy.map(n => n * n).reduce((s, n) => s + n, 0);

// ary = [3.14, 9.8, 2.718];

// aryProxy = new Proxy(ary, {
//   get(target, prop) {
//     return Math.round(target[prop])
//   },
//   set(target, prop, value) {
//     if (!Number.isInteger(value)) {
//       throw new Error("not integer")
//     }
//     target[prop] = value
//   },
//   has(target, prop) {
//     return prop = 2;
//   },
//   ownKeys(target) {
//     return ["0", "1", "length"]
//   }
// })
function add(a, b, c) {
  return a + b + c;
}

addProxy = new Proxy(add, {
apply(target, thisArg, args) {
  return target.apply(thisArg, args.map(n => n * n))
  }
})
addProxy(1, 4, 5);
