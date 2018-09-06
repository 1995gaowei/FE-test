function normalize(str) {
  // your code here
  let obj = {};
  let arr = str.split("[");
  if (arr.length > 1) {
    let last = arr[arr.length - 1];
    arr[arr.length - 1] = last.replace(/\]/g, "");
    arr.shift();
    let temp = {};
    obj = temp;
    temp.value = arr.shift();
    while (arr.length) {
      temp.children = { value: arr.shift() };
      temp = temp.children;
    }
  } else {
    obj.value = str;
  }
  return obj;
}

console.log(normalize("[abc[def]]"));
