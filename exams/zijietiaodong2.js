// let s = readline();
// let n = s.length;
// let set = new Set();
// let ans = 0,
//   i = 0,
//   j = 0;
// while (i < n && j < n) {
//   if (!set.has(s[j])) {
//     set.add(s[j++]);
//     ans = Math.max(ans, j - i);
//   } else {
//     set.delete(s[i++]);
//   }
// }
// print(ans);

// let n = 6,
//   res = 0;

// for (let i = 1; i < n - 2; i++) {
//   for (let j = i + 1; j < n - 1; j++) {
//     for (let k = j + 1; k < n; k++) {
//       console.log(i, j, k);
//     }
//   }
// }

function print(s) {
  console.log(s);
}

let res = true;
let arr = "197 130 259 1".split(" ").map(n => parseInt(n));

function getBinary(n) {
  let arr = [];
  while (n) {
    arr.unshift(n % 2);
    n >>= 1;
  }
  let s = arr.join("").padStart(8, "0");
  return s.substring(s.length - 8);
}

function validate(arr) {
  let res = true;
  let num = arr.shift();
  let binary = getBinary(num);
  let n = 0;
  if (binary.startsWith("11110")) {
    n = 3;
  } else if (binary.startsWith("1110")) {
    n = 2;
  } else if (binary.startsWith("110")) {
    n = 1;
  }
  while (n) {
    n--;
    num = arr.shift();
    if (!getBinary(num).startsWith("10")) {
      res = false;
      break;
    }
  }
  return res;
}

while (arr.length) {
  res = validate(arr);
  if (!res) {
    break;
  }
}

print(res ? 1 : 0);
