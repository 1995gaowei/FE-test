class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update();
    });
  }
}

class Watcher {
  constructor() {
    Dep.target = this;
  }

  update() {
    console.log("update://");
  }
}

Dep.target = null;

function observe(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }

  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key]);
  });
}

function defineReactive(obj, key, val) {
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.addSub(Dep.target);
      return val;
    },
    set(newVal) {
      if (val === newVal) return;
      dep.notify();
    }
  });
}

class Vue {
  constructor(options) {
    this._data = options.data;
    observe(this._data);
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    new Watcher();
    /* 在这里模拟render的过程，为了触发test属性的get函数 */
    console.log("render~", this._data.text);
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
