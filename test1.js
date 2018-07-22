function t(arr, parentId) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].parent == parentId) {
      let target = arr[i];
      arr.splice(i, 1);
      let child = t(arr, target.id);
      if (child == null)
        return {
          id: target.id,
          parent: target.parent
        };
      else
        return {
          id: target.id,
          parent: target.parent,
          child
        };
    }
  }

  return null;
}

var obj1 = [
  { id: 1, parent: null },
  { id: 2, parent: 1 },
  { id: 3, parent: 2 }
];

var obj2 = {
  obj: t(obj1, null)
};
console.log(obj2);

function a(...nums) {
  console.log(nums.join(" "));
}
a("1", "2", "3");
