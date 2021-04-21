function makeFizzBuzzIterator(max) {
  let count = 0;
  return {
    next() {
      count++
      const done = max <= count
      if (count % 6 === 0) {
        return {value: "FizzBuzz", done}
      }
    }
  }
}
