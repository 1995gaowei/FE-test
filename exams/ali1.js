const timeout = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const ajax1 = () =>
  timeout(2000).then(() => {
    console.log("1");
    return 1;
  });

const ajax2 = () =>
  timeout(1000).then(() => {
    console.log("2");
    return 2;
  });

const ajax3 = () =>
  timeout(2000).then(() => {
    console.log("3");
    return 3;
  });

const mergePromise = ajaxArray => {
  // 在这里实现你的代码

  var data = [];
  var res = Promise.resolve();
  ajaxArray.forEach(function(ajax) {
    res = res.then(ajax).then(res => {
      data.push(res);
    });
  });

  return res.then(() => data);
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

var p1 = new Promise(resolve => {
  console.log(1);
  resolve(2);
});

var p2 = new Promise(resolve => {
  console.log(3);
  resolve(p1);
  return 3;
});
p2.then(re => {
  console.log(re);
});

// p1.then(re => {
//   console.log(re);
// });
