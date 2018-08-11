// let count = parseInt("3 2".split(" ")[1]);
// let tArr = "5 8 5".split(" ").map(n => parseInt(n));
// let res = [],
//   c = 0;

// function getMaxIdx() {
//   return tArr.indexOf(Math.max(...tArr));
// }
// function getMinIdx() {
//   return tArr.indexOf(Math.min(...tArr));
// }

// while (c < count && Math.max(...tArr) - Math.min(...tArr) > 1) {
//   let maxI = getMaxIdx();
//   let minI = getMinIdx();

//   // if (res.length && res[res.length - 1] == minI + 1 + " " + (maxI + 1)) {
//   //   break;
//   // } else {
//   res.push(maxI + 1 + " " + (minI + 1));
//   tArr[maxI]--;
//   tArr[minI]++;
//   c++;
//   // }
// }

// print(Math.max(...tArr) - Math.min(...tArr) + " " + c);
// for (let s of res) {
//   print(s);
// }

function print(s) {
  console.log(s);
}

let line = "2 2 7".split(" ").map(n => parseInt(n));

let n = line[0],
  m = line[1],
  k = line[2];

function getCntOfNM(n, m) {
  if (n == 0 || m == 0) {
    return 1;
  }

  let fz = 1,
    fm = 1;
  for (let i = 1; i <= n; i++) {
    fz *= i;
    fm *= m + n - i + 1;
  }
  return fm / fz;
}

let res = [];
let flag = false;
while (k <= getCntOfNM(n, m) && n != 0 && m != 0) {
  flag = true;
  let cnt = getCntOfNM(n - 1, m);
  if (k > cnt) {
    res.push("z");
    k -= cnt;
    m--;
  } else {
    res.push("a");
    n--;
  }
}
if (flag) {
  for (let i = 0; i < n; i++) {
    res.push("a");
  }
  for (let i = 0; i < m; i++) {
    res.push("z");
  }
}
print(res.length ? res.join("") : -1);
