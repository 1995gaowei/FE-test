function print(s) {
  console.log(s);
}

function* input1() {
  yield "6";
  yield "bytedance";
  yield "toutiaohao";
  yield "toutiaoapp";
  yield "iesawe";
  yield "iestiktok";
  yield "toutiaob";
}

let out = input1();

function readline() {
  return out.next().value;
}

let n = parseInt(readline());
let arr = [],
  res = [];
while (n--) {
  arr.push(readline());
  res.push(1);
}

for (let i = 0; i < arr.length; i++) {
  let temp = [res[i]];
  for (let j = i + 1; j < arr.length; j++) {
    let idx = 1;
    while (arr[j].substring(0, idx) === arr[i].substring(0, idx)) {
      idx++;
    }
    res[j] = res[j] > idx ? res[j] : idx;
    temp.push(idx);
  }
  arr[i] = arr[i].substring(0, Math.max(...temp));
}

for (let s of arr) {
  print(s);
}
