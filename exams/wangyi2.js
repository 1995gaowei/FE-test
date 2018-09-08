let str = readline();
let length = str.length;

str += str;
let max = 1,
  l = 1;
for (let i = 1; i < str.length; i++) {
  if (str[i] !== str[i - 1]) {
    l++;
    if (l > max) {
      max = l;
    }
  } else {
    l = 1;
  }
}

print(max);
