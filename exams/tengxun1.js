let s = "xbabcba";
let p = "ba";

let res = [];
for (let i = 0; i < s.length; i++) {
  if (s.substring(i, i + p.length) === p) {
    res.push([i, i + p.length]);
  }
}

let l = [];
let last = res.reduce(
  (acc, cur) => {
    if (acc[1] >= cur[0]) {
      return [acc[0], cur[1]];
    } else {
      l.push(acc[1] - acc[0]);
      return cur;
    }
  },
  [0, 0]
);
l.push(last[1] - last[0]);

let sum = l.map(n => Math.pow(n, 2)).reduce((acc, cur) => acc + cur);

console.log(sum);
