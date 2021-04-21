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
