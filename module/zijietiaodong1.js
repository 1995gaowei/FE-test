let test2 = ["1,10;32,45", "78,94;5,16", "80,100;200,220;16,32"];

function print(s) {
  console.log(s);
}

// let n = parseInt(3);
// let arr = [],
//   temp;
// for (let i = 0; i < n; i++) {
//   temp = test2[i].split(";").map(idx => idx.split(",").map(n => parseInt(n)));
//   arr.push(...temp);
// }

// arr.sort((a, b) => a[0] - b[0]);

// let cur = [],
//   res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (cur.length) {
//     if (arr[i][0] <= cur[1]) {
//       cur[1] = Math.max(arr[i][1], cur[1]);
//     } else {
//       res.push(cur.join(","));
//       cur = arr[i];
//     }
//   } else {
//     cur = arr[i];
//   }
// }
// res.push(cur.join(","));
// print(res.join(";"));

let arr = [],
  a1 = [],
  chongtu = [];
let line = "0 3 3 7 7 0 3 6 6 7".split(" ").map(n => parseInt(n));
for (let i = 0; i < line.length; i += 2) {
  arr.push([line[i], line[i + 1]]);
  a1.push(i / 2);
  chongtu.push([]);
}

for (let i = 0; i < arr.length; i++) {
  chongtu[i][i] = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i][0] < arr[j][0] && arr[i][1] > arr[j][0]) {
      chongtu[i][j] = true;
    } else if (arr[i][0] < arr[j][1] && arr[i][1] > arr[j][1]) {
      chongtu[i][j] = true;
    } else {
      chongtu[i][j] = false;
    }
  }
}
function solve(a) {
  if (a.length) {
    let temp = a.slice(1);
    let a0 = a[0];
    return Math.max(solve(temp), 1 + solve(temp.filter(i => !chongtu[a0][i])));
  } else {
    return 0;
  }
}
print(solve(a1));
