function cb(val = "") {
  console.log(`update://${val}`);
}

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      return val;
    },
    set(newVal) {
      if (val === newVal) return;
      cb(newVal);
    }
  });
}

function observe(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }

  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key]);
  });
}

class Vue {
  constructor(options) {
    this._data = options.data;
    observe(this._data);
  }
}

// test case 1
let v1 = new Vue({
  data: {
    text: "hello"
  }
});

setTimeout(function() {
  v1._data.text = "world";
  setTimeout(() => {
    v1._data.text = "!";
  }, 3000);
}, 0);
