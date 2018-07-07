// var fn;
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   fn = baz;
// }
// function bar() {
//   fn();
// }

// foo();
// bar(); // 2

console.log("golb1");

// setImmediate(function() {
//   console.log("immediate1");
//   process.nextTick(function() {
//     console.log("immediate1_nextTick");
//   });
//   new Promise(function(resolve) {
//     console.log("immediate1_promise");
//     resolve();
//   }).then(function() {
//     console.log("immediate1_then");
//   });
// });

setTimeout(function() {
  console.log("timeout1");
  // setImmediate(() => {
  //   console.log("timeout1_immediate1");
  //   process.nextTick(function() {
  //     console.log("timeout1_immediate1_nextTick");
  //   });
  // });
  process.nextTick(function() {
    console.log("timeout1_nextTick");
  });
  new Promise(function(resolve) {
    console.log("timeout1_promise");
    resolve();
  })
    .then(function() {
      console.log("timeout1_then");
      return new Promise(function(resolve) {
        console.log("timeout1_then_promise");
        resolve();
      });
    })
    .then(function() {
      console.log("timeout1_then_then");
    });
});

new Promise(function(resolve) {
  console.log("glob1_promise");
  resolve();
}).then(function() {
  console.log("glob1_then");
});
process.nextTick(function() {
  console.log("glob1_nextTick");
});

setTimeout(function() {
  console.log("timeout2");
  setTimeout(() => {
    console.log("timeout2_timeout1");
    process.nextTick(function() {
      console.log("timeout2_timeout1_nextTick");
    });
  });
  process.nextTick(function() {
    console.log("timeout2_nextTick");
  });
  new Promise(function(resolve) {
    console.log("timeout2_promise");
    resolve();
  }).then(function() {
    console.log("timeout2_then");
  });
});

process.nextTick(function() {
  console.log("glob2_nextTick");
});
new Promise(function(resolve) {
  console.log("glob2_promise");
  resolve();
}).then(function() {
  console.log("glob2_then");
});

// setImmediate(function() {
//   console.log("immediate2");
//   process.nextTick(function() {
//     console.log("immediate2_nextTick");
//   });
//   new Promise(function(resolve) {
//     console.log("immediate2_promise");
//     resolve();
//   }).then(function() {
//     console.log("immediate2_then");
//   });
// });
