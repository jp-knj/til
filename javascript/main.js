// 練習問題

// using if
if (c == 1) {
  console.log("case 1")
} else if (c==2) {
  console.log("case 2")
} else {
  console.log("default")
  console.log("case 2")
}

// using switch
switch (c) {
  case 1:
    console.log("case 1")
  default:
    console.log("default")
  case 2:
    console.log("case 2")
}

// using while
let i = 0;
while (i < 3) {
  const j = i * 2;
  console.log(j)
  i++;
}

// using for
for (let i = 0; i < 3; i++){
  const j = i * 2;
  console.log(j)
}

const pow = (n, e) => {
  let result = 1
  for (let i = 0; i < e; i++) result *= n
  return result
}

const powE = e => {
  return n => pow(n,e)
}

const sumMap = (ary, f) => {
  let result = 0
  for (let n of ary) {
    result += f(n)
  }
  return result
}

console.log(sumMap([1, 4, 5], powE(2))); //42

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  post() {
    console.log(`post by ${this.name}`)
  }
}

class Administrator extends User {
  publish() {
    console.log(`post by ${this.name} as Adminstrator`)
  }
}
