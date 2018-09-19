let input = [
  {
    id: 1
  },
  {
    id: 2,
    children: [
      {
        id: 3
      },
      {
        id: 4
      }
    ]
  },
  {
    id: 5
  }
];

let output = [];

function normalize(parentId, arr) {
  for (let o of arr) {
    output.push({ id: o.id, parentId });
    if (o.children) {
      normalize(o.id, o.children);
    }
  }
}

normalize(0, input);

console.log(output);
