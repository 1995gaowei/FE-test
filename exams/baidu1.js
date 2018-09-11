function print(s) {
  console.log(s);
}

function* input1() {
  yield "3 -1 0 5 0";
  yield "0 2";
  yield "5 2";
  yield "2 0";
}

let out = input1();

function readline() {
  return out.next().value;
}

let line = readline()
  .split(" ")
  .map(n => parseInt(n));

let x1 = line[1],
  y1 = line[2],
  x2 = line[3],
  y2 = line[4],
  n = line[0];
let flowers = [];
while (n) {
  n--;
  let flower = readline().split(" ");
  let f = {};
  f.x = parseInt(flower[0]);
  f.y = parseInt(flower[1]);
  flowers.push(f);
}

let temp1,
  temp2,
  temp = [];
let r12 = 0,
  r22 = 0;
for (let { x, y } of flowers) {
  temp1 = Math.pow(Math.abs(x - x1), 2) + Math.pow(Math.abs(y - y1), 2);
  temp2 = Math.pow(Math.abs(x - x2), 2) + Math.pow(Math.abs(y - y2), 2);
  if (temp1 < temp2) {
    r12 = Math.max(r12, temp1);
  } else if (temp1 > temp2) {
    r22 = Math.max(r22, temp2);
  } else {
    temp.push(temp1);
  }
}

let r = Math.max(...temp);
if (r12 >= r || r22 >= r) {
  print(r12 + r22);
} else {
  print(Math.min(r12, r22) + r);
}
