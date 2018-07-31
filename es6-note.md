# let & const

1.  let 命令

    - 只对 let 命令所在的代码块有效
    - 不存在变量提升
    - 暂时性死区。暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
    - 不允许重复声明

2.  块级作用域

    - 原因。内层变量可能覆盖外层变量；用来计数的循环变量泄露；闭包里的回调函数参数可能不正确。
    - let 和 const 的使用，实际上为 JavaScript 新增了块级作用域。
    - 块级作用域与函数声明。ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。ES6 规定，块级作用域之中，函数声明语句的行为类似于 let，在块级作用域之外不可引用。但是，为了减轻因此产生的不兼容问题，ES6 在附录 B 里面规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式，行为类似于 var 声明的变量。

3.  const 命令

    - 用法与 let 基本一致，只是变量指向的那个内存地址所保存的数据不得改动。

4.  顶层对象的属性

    - ES6 为了改变 ES5 中顶层对象的属性与全局变量是等价的这一点，一方面规定，为了保持兼容性，var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let 命令、const 命令、class 命令声明的全局变量，不属于顶层对象的属性。

5.  global 对象

    - 浏览器里面，顶层对象是 window，但 Node 和 Web Worker 没有 window。
    - 浏览器和 Web Worker 里面，self 也指向顶层对象，但是 Node 没有 self。
    - Node 里面，顶层对象是 global，但其他环境都不支持。

# 变量的解构赋值

1.  数值和布尔值的解构赋值

    - 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

2.  不能使用圆括号的情况

    - 变量声明语句
    - 函数参数
    - 赋值语句的模式部分

3.  用途

    - 交换变量的值
    - 从函数返回多个值
    - 函数参数的定义
    - 提取 JSON 数据
    - 函数参数的默认值
    - 遍历 Map 结构
    - 输入模块的指定方法

# 字符串的扩展

1.  字符的 Unicode 表示法

    ```
    '\z' === 'z'  // true
    '\172' === 'z' // true, 8进制
    '\x7A' === 'z' // true, 16进制
    '\u007A' === 'z' // true, 双字节的 UTF-16 编码
    '\u{7A}' === 'z' // true, es6码点放进大括号的表示法
    ```

2.  for...of 循环遍历字符串

3.  at()

4.  includes(), startsWith(), endsWith()

5.  repeat()

6.  padStart(), padEnd()

7.  模板字符串

8.  标签模板。函数调用的一种特殊形式

# 函数的扩展

1.  函数参数的默认值

    - 通常情况下，定义了默认值的参数，应该是函数的尾参数。
    - 指定了默认值以后，函数的 length 属性，将返回没有指定默认值的参数个数。

2.  rest 参数

    - （形式为...变量名），用于获取函数的多余参数，这样就不需要使用 arguments 对象了。

3.  箭头函数

    - 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
      ```
      let getTempItem = id => ({ id: id, name: "Temp" });
      ```
    - 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。

4.  尾调用优化

    - 尾调用指某个函数的最后一步是调用另一个函数。
    - 尾递归。尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。

# 数组的扩展

1.  扩展运算符

    - 扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。

2.  Array.from()

    - Array.from 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象
    - Array.from 还可以接受第二个参数，作用类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
    - 如果 map 函数里面用到了 this 关键字，还可以传入 Array.from 的第三个参数，用来绑定 this。

3.  find() & findIndex()

4.  fill()

    - fill 方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

5.  includes()

6.  数组的空位

    - forEach(), filter(), reduce(), every() 和 some()都会跳过空位。
    - map()会跳过空位，但会保留这个值
    - join()和 toString()会将空位视为 undefined，而 undefined 和 null 会被处理成空字符串。
    - ES6 则是明确将空位转为 undefined。

# 对象的扩展

1.  属性的简洁表示法

2.  属性名表达式

3.  方法的 name 属性

    - 函数的 name 属性，返回函数名
    - 如果对象的方法使用了取值函数（getter）和存值函数（setter），则 name 属性不是在该方法上面，而是该方法的属性的描述对象的 get 和 set 属性上面，返回值是方法名前加上 get 和 set。

          	```
          	const obj = {
          		get foo() {},
          		set foo(x) {}
          	};

          	obj.foo.name
          	// TypeError: Cannot read property 'name' of undefined

          	const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

          	descriptor.get.name // "get foo"
          	descriptor.set.name // "set foo"
          	```

    - bind 方法创造的函数，name 属性返回 bound 加上原函数的名字；Function 构造函数创造的函数，name 属性返回 anonymous。

4.  Object.is()

    - 与严格比较运算符（===）的行为基本一致。
    - 不同之处只有两个：一是+0 不等于-0，二是 NaN 等于自身。

5.  Object.assign()

    - 用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
    - 如果只有一个参数，Object.assign 会直接返回该参数。如果该参数不是对象，则会先转成对象，然后返回。由于 undefined 和 null 无法转成对象，所以如果它们作为参数，就会报错。
    - Object.assign 拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
    - 用途
      - 为对象添加属性
      - 为对象添加方法
      - 克隆对象
      - 合并对个对象
      - 为属性指定默认值

6.  属性的可枚举性和遍历

    - 有四个操作会忽略 enumerable 为 false 的属性。
      1.  for...in 循环：只遍历对象自身的和继承的可枚举的属性。
      2.  Object.keys()：返回对象自身的所有可枚举的属性的键名。
      3.  JSON.stringify()：只串行化对象自身的可枚举的属性。
      4.  Object.assign()： 忽略 enumerable 为 false 的属性，只拷贝对象自身的可枚举的属性。
    - ES6 规定，所有 Class 的原型的方法都是不可枚举的。
    - 属性的遍历
      1.  for...in
          - for...in 循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
      2.  Object.keys(obj)
          - Object.keys 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
      3.  Object.getOwnPropertyNames(obj)
          - Object.getOwnPropertyNames 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
      4.  Object.getOwnPropertySymbols(obj)
          - Object.getOwnPropertySymbols 返回一个数组，包含对象自身的所有 Symbol 属性的键名。
      5.  Reflect.ownKeys(obj)
          - Reflect.ownKeys 返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

7.  Object.keys()，Object.values()，Object.entries()

8.  对象的扩展运算符

    - 等同于使用 Object.assign 方法。
      ```
      let aClone = { ...a };
      // 等同于
      let aClone = Object.assign({}, a);
      ```

# Symbol

1.  作为属性名的 Symbol

    - 通过方括号结构和 Object.defineProperty，将对象的属性名指定为一个 Symbol 值。Symbol 值作为对象属性名时，不能用点运算符。
    - 用途。定义一组常量；消除魔术字符串。

2.  属性名的遍历

    - Object.getOwnPropertySymbols()
    - Reflect.ownKeys()

3.  Symbol.for() & Symbol.keyFor()

    - Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key
    - Symbol.for 为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。

4.  内置的 11 个 Symbol 值

    - Symbol.hasInstance
    - Symbol.isConcatSpreadable
    - Symbol.species
    - Symbol.match
    - Symbol.replace
    - Symbol.search
    - Symbol.split
    - Symbol.iterator
    - Symbol.toPrimitive
    - Symbol.toStringTag
    - Symbol.unscopables

# Set & Map

1.  Set

    - 属性
      1.  Set.prototype.constructor
      2.  Set.prototype.size
    - 方法
      1.  add(value)
      2.  delete(value)
      3.  has(value)
      4.  clear()
    - 遍历
      1.  keys(), values(), entries()
      2.  forEach()
      3.  扩展运算符
    - Set 结构的键名就是键值

2.  Map

    - 基本类似 Set，方法 -add +get +set
    - 只有对同一个对象的引用，Map 结构才将其视为同一个键。

3.  WeakSet & WeakMap

    - WeakSet 的成员只能是对象，而不能是其他类型的值。
    - WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
    - WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名。
    - WeakMap 的键名所指向的对象，不计入垃圾回收机制。
    - 如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。
    - 没有 size, 不可遍历, 无法清空

# Promise

# Iterator 和 for...of 循环

1.  凡是部署了 Symbol.iterator 属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。原生具备 Iterator 接口的数据结构

    - Array
    - Map
    - Set
    - String
    - TypedArray
    - 函数的 arguments 对象
    - NodeList 对象

# Generator 函数

# async & await

1.  async 对 Generator 函数的改进体现在一下四点

    1.  内置执行器
    2.  更好的语义
    3.  更广的适用性
        - co 模块约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 async 函数的 await 命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。
    4.  返回值是 Promise

# Class

1.  类必须使用 new 调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用 new 也可以执行。

2.  使用 Object.getPrototypeOf 方法替代\_\_proto\_\_

3.  class 表达式

    - 与函数一样，类也可以用表达式的形式定义
      ```
      const MyClass = class Me {
        getClassName() {
          return Me.name;
        }
      };
      ```
    - 上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是 MyClass 而不是 Me，Me 只在 Class 的内部代码可用，指代当前类。
    - 如果类的内部没用到的话，可以省略 Me，也就是可以写成下面的形式。

4.  不存在变量提升

5.  new.target

6.  Class 的继承

    - 子类必须在 constructor 方法中调用 super 方法

      - ES5 的继承，实质是先创造子类的实例对象 this，然后再将父类的方法添加到 this 上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到 this 上面（所以必须先调用 super 方法），然后再用子类的构造函数修改 this。

    - 可以使用 `Object.getPropertyOf(Sub) === Sup` 判断，一个类是否继承了另一个类。

    - super

      - super 内部的 this 指的是子类实例
      - super 作为对象时，在普通方法中，指向父类的原型对象
      - 如果通过 super 对某个属性赋值，这时 super 就是 this，赋值的属性会变成子类实例的属性。

# Decorator

1.  类的修饰

    - 如果觉得一个参数不够用，可以在修饰器外面再封装一层函数。
    - 修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。也就是说，修饰器本质就是编译时执行的函数。

2.  方法的修饰

    - 修饰器函数一共可以接受三个参数：target, name, descriptor
    - target 是类的原型对象

3.  修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。

# Module

1.  export 命令

    - export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
    - export 命令可以出现在模块的任何位置，只要处于模块顶层就可以。

2.  import 命令

    - import 命令输入的变量都是只读的，因为它的本质是输入接口
    - import 命令具有提升效果，会提升到整个模块的头部，首先执行。
    - 由于 import 是静态执行，所以不能使用表达式和变量

3.  import()

    - 按需加载
    - 条件加载
    - 动态的模块路径

4.  加载实现

    1.  浏览器加载

        - defer & async
          - defer 是“渲染完再执行”，async 是“下载完就执行”。另外，如果有多个 defer 脚本，会按照它们在页面出现的顺序加载，而多个 async 脚本是不能保证加载顺序的。
        - type="module"。默认 defer

    2.  ES6 模块与 CommonJS 模块的差异

        - CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
        - CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
