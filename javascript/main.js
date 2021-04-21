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
