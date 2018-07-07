# HTML

- 事件
  1.  DOM0 级事件，由 JavaScript 指定事件处理程序，冒泡阶段被处理
      ```
      element.onclick = () => { console.log('click) }
      ```
  2.  DOM2 级事件，定义了 2 个方法，addEventListener()和 removeEventListener()，3 个参数：要处理的事件名，回调，布尔（true：捕获阶段，false：冒泡阶段）；可以添加多个事件处理程序

# CSS

- 继承属性 （font, text-align, line-height, color, visibility, cursor...）

# JS

- 基本类型和引用类型

  1.  访问变量有按值和按引用两种方式，而参数只能按值传递
  2.  基本数据类型检测用 typeof，引用类型使用 instanceof 操作符

- 执行上下文

  - 创建阶段

    1.  创建变量对象
    2.  建立作用域链
    3.  确定 this 指向

  - 执行阶段
    1.  变量赋值
    2.  函数引用
    3.  执行其他代码

- 变量对象

  - 创建

    1.  建立 arguments 对象。
    2.  检查当前上下文的函数声明，也就是使用 function 关键字声明的函数。
    3.  检查当前上下文中的变量声明，每找到一个变量声明，就在变量对象中以变量名建立一个属性，属性值为 undefined。如果该变量名的属性已经存在，为了防止同名的函数被修改为 undefined，则会直接跳过，原属性值不会被修改

  - 变量对象 & 活动对象
    - 未进入执行阶段之前，变量对象中的属性都不能访问！但是进入执行阶段之后，变量对象转变为了活动对象，里面的属性都能被访问了，然后开始进行执行阶段的操作。

- 作用域

  - 分类
    1.  全局作用域
    2.  函数作用域
    3.  eval()

- this

  - 在函数执行过程中，this 一旦被确定，就不可更改了。
  - 如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的 this 指向该对象。如果函数独立调用，那么该函数内部的 this，则指向 undefined。但是在非严格模式中，当 this 指向 undefined 时，它会被自动指向全局对象。
  - call & apply
    - 参数。call 以一个一个的形式传递，apply 以数组的形式传递。
  - bind

- 闭包，有权访问另一个函数作用域中的变量的函数

  - 柯里化
    - 柯里化是指这样一个函数(假设叫做 createCurry)，他接收函数 A 作为参数，运行后能够返回一个新的函数。并且这个新的函数能够处理函数 A 的剩余参数。
    ```
    //  通用的函数柯里化构造方法
    function curry(func){
      //新建args保存参数，注意，第一个参数应该是要柯里化的函数，所以args里面去掉第一个
      var args = [].slice.call(arguments,1);
      //新建_func函数作为返回值
      var _func =  function(){
        //参数长度为0，执行func函数，完成该函数的功能
        if(arguments.length === 0){
          return func.apply(this,args);
        }else {
          //否则，存储参数到闭包中，返回本函数
          [].push.apply(args,arguments);
          return _func;
        }
      }
      return _func;
    }
    ```
  - 模块化

- 面向对象

  1.  - 数据属性：configurable, enumerable, value, writable
      - 访问器属性：configurable, enumerable, get, set。用于设置一个属性导致其他属性发生变化。
  2.  继承
      - 原型链：重写原型对象，代之以一个新类型的实例
        ```
        SubType.prototype  = new SuperType()
        ```
        问题：包含引用类型值的原型，不能向超类型的构造函数传递参数。
      - 借用构造函数，在子类型构造函数内部调用超类型构造函数
        ```
        function SubType() {
            SuperType.call(this)
        }
        ```
        问题：不能函数复用
      - 组合继承，将原型链和借用构造函数的技术组合
      - 寄生组合式继承

- 纯函数

  1.  函数的返回结果只依赖于它的参数
  2.  函数执行过程没有副作用

- polyfill & shim

  - shim 是一个库，它将一个新的 API 引入到一个旧的环境中，而且仅靠旧环境中已有的手段去实现
  - polyfill 是用在浏览器 API 上的 shim

- event-loop

  - 一个事件循环(event loop)会有一个或多个任务队列(task queue) task queue 就是 macrotask queue
  - 每一个 event loop 都有一个 microtask queue

  - macro-task 大概包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。
  - micro-task 大概包括: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5 新特性)

- ===运算符判断相等的流程是怎样的

  1.  如果两个值不是相同类型，它们不相等
  2.  如果两个值都是 null 或者都是 undefined，它们相等
  3.  如果两个值都是布尔类型 true 或者都是 false，它们相等
  4.  如果其中有一个是 NaN，它们不相等
  5.  如果都是数值型并且数值相等，他们相等， -0 等于 0
  6.  如果他们都是字符串并且在相同位置包含相同的 16 位值，他它们相等；如果在长度或者内容上不等，它们不相等；两个字符串显示结果相同但是编码不同==和===都认为他们不相等
  7.  如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等

- ==运算符判断相等的流程是怎样的

  1.  如果两个值类型相同，按照===比较方法进行比较
  2.  如果类型不同，使用如下规则进行比较
  3.  如果其中一个值是 null，另一个是 undefined，它们相等
  4.  如果一个值是数字另一个是字符串，将字符串转换为数字进行比较
  5.  如果有布尔类型，将 true 转换为 1，false 转换为 0，然后用==规则继续比较
  6.  如果一个值是对象，另一个是数字或字符串，将对象转换为原始值然后用==规则继续比较
  7.  其他所有情况都认为不相等

- 深度克隆

  ```
  function deepClone(obj) {
      var _toString = Object.prototype.toString;

      // null, undefined, non-object, function
      if (!obj || typeof obj !== 'object') {
          return obj;
      }

      // DOM Node
      if (obj.nodeType && 'cloneNode' in obj) {
          return obj.cloneNode(true);
      }

      // Date
      if (_toString.call(obj) === '[object Date]') {
          return new Date(obj.getTime());
      }

      // RegExp
      if (_toString.call(obj) === '[object RegExp]') {
          var flags = [];
          if (obj.global) { flags.push('g'); }
          if (obj.multiline) { flags.push('m'); }
          if (obj.ignoreCase) { flags.push('i'); }

          return new RegExp(obj.source, flags.join(''));
      }

      var result = Array.isArray(obj) ? [] :
          obj.constructor ? new obj.constructor() : {};

      for (var key in obj ) {
          result[key] = deepClone(obj[key]);
      }

      return result;
  }
  ```

- mouseover/mouseout 与 mouseenter/mouseleave 的区别与联系

  1.  mouseover/mouseout 是冒泡事件；mouseenter/mouseleave 不冒泡。需要为多个元素监听鼠标移入/出事件时，推荐 mouseover/mouseout 托管，提高性能
  2.  mouseover/mouseout 是标准事件，所有浏览器都支持；mouseenter/mouseleave 是 IE5.5 引入的特有事件后来被 DOM3 标准采纳，现代标准浏览器也支持

- sessionStorage,localStorage,cookie 区别

  1.  都会在浏览器端保存，有大小限制，同源限制
  2.  cookie 会在请求时发送到服务器，作为会话标识，服务器可修改 cookie；web storage 不会发送到服务器
  3.  cookie 有 path 概念，子路径可以访问父路径 cookie，父路径不能访问子路径 cookie
  4.  有效期：cookie 在设置的有效期内有效，默认为浏览器关闭；sessionStorage 在窗口关闭前有效，localStorage 长期有效，直到用户删除
  5.  共享：sessionStorage 不能共享，localStorage 在同源文档之间共享，cookie 在同源且符合 path 规则的文档之间共享
  6.  localStorage 的修改会促发其他文档窗口的 update 事件
  7.  cookie 有 secure 属性要求 HTTPS 传输
  8.  浏览器不能保存超过 300 个 cookie，单个服务器不能超过 20 个，每个 cookie 不能超过 4k。web storage 大小支持能达到 5M

- 阻止冒泡和默认事件
  1.  冒泡：e.stopPropagation,IE 下为 cancelBubble=true
  2.  默认事件，e.preventDefault(),e.returnValue=false,return false(用来取消对象属性注册的处理程序)

# Web 安全

- XSS （跨站脚本攻击）

- CSRF （跨站点请求伪造）

- HTTPS （HTTP+SSL）
  1.  通信加密
  2.  证书认证
  3.  完整性保护

# Vue

> 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
>
> 1.  当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
> 2.  当你修改数组的长度时，例如：vm.items.length = newLength

> 注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态。

> 注意那些 prop 会在一个组件实例创建之前进行验证，所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。

> 有了 inheritAttrs: false 和 $attrs，你就可以手动决定这些特性会被赋予哪个元素。

> 将 v-bind.sync 用在一个字面量的对象上，例如 v-bind.sync=”{ title: doc.title }”，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。

# 模块

- Commonjs

  1.  module.exports & require
  2.  同步加载方案

- AMD

  1.  require([module], callback) & define(id?, dependencies?, factory)
  2.  异步模块定义
  3.  任何全局函数必须有一个 amd 属性来标识遵循 AMD 编程接口
  4.  例，RequireJS, curl.js

- CMD
  1.  例，SeaJS
