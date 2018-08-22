# HTML

- 事件

  1.  DOM0 级事件，由 JavaScript 指定事件处理程序，冒泡阶段被处理
      ```
      element.onclick = () => { console.log('click) }
      ```
  2.  DOM2 级事件，定义了 2 个方法，addEventListener()和 removeEventListener()，3 个参数：要处理的事件名，回调，布尔（true：捕获阶段，false：冒泡阶段）；可以添加多个事件处理程序

  3.  mouseover & mouseenter

      - mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是 mouseout
      - mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是 mouseleave

  4.  事件委托

      - 事件委托指的是，不在事件的发生地（直接 dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素 DOM 的类型，来做出不同的响应。

      - 比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。

- iframe

  - iframe 会阻塞主页面的 Onload 事件；
  - 搜索引擎的检索程序无法解读这种页面，不利于 SEO;
  - iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

- manifest

  - 文件扩展名.appcache, MIME-type = text/cache-manifest

  ```
  CACHE MANIFEST
  # 2012-02-21 v1.0.0
  /theme.css
  /logo.gif
  /main.js

  NETWORK:
  login.asp

  FALLBACK:
  /html5/ /404.html
  ```

- HTML5

  1.  新元素（canvas，表单元素，多媒体元素，语义和结构元素）

  2.  Canvas & svg

  3.  拖拽事件

  4.  Web 存储

  5.  Web SQL

  6.  Web Worker

  7.  WebSocket & Sever-sent Event

  8.  应用程序缓存

# CSS

- 继承属性 （font, text-align, line-height, color, visibility, cursor...）

- [搞清 clientHeight、offsetHeight、scrollHeight、offsetTop、scrollTop](https://www.imooc.com/article/17571)

- BFC

  - 如何形成

    1.  根元素
    2.  float 不为 none
    3.  绝对定位的元素
    4.  非块级元素具有 display: inline-block，table-cell, table-caption, flex, inline-flex
    5.  块级元素具有 overflow，且不为 visible

  - 用处

    1.  清除浮动
    2.  布局，自适应两栏
    3.  防止 margin 合并

- BEM & SUIT

  - Block\_\_Element--Modifier
  - SUIT
    - Utilities。用来处理结构和位置方面的样式，.u-驼峰
    - Components。对应 Block,pascal 命名，可加命名空间，.nmsp-Component
    - Descendants。对应 Element,-连接
    - Modifier。只用于 Components，--连接
    - State。is-前缀

- Grid layout

  - grid-template-columns(rows, areas), grid-gap;
  - grid-column(row, area), fr 单位

- Flex layout

  - flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content
  - order, flex-grow, flex-shrink, flex-basis, flex, align-self

# JS

- 基本类型和引用类型

  1.  访问变量有按值和按引用两种方式，而参数只能按值传递
  2.  基本数据类型检测用 typeof，引用类型使用 instanceof 操作符

- 执行上下文

  - 当一个函数被调用，一个新的执行上下文就被创建并被压入函数调用栈。一个执行上下文 EC 包含变量对象 VO，作用域链 ScopeChain，this 指针。

  - 创建阶段

    1.  创建变量对象

        - 建立 arguments 对象
        - 检查函数声明，如果函数名的属性存在则覆盖
        - 检查变量声明，如果变量名属性存在则跳过

        - 未进入执行阶段之前，变量对象中的属性都不能访问，进入执行阶段后，变量对象变成了活动对象，里面的属性就能被访问了。两者是同一个对象，只是出于执行上下文的不同生命周期。只有处于函数调用栈栈顶的执行上下文中的变量对象，才会变成活动对象。

    2.  建立作用域链

        - 作用域链，是由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问。

    3.  确定 this 指向

  - 执行阶段
    1.  变量赋值
    2.  函数引用
    3.  执行其他代码

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

  - 判定 this

    1.  函数是通过 new 被调用的吗（new 绑定）？如果是，this 就是新构建的对象。

        ```
        var bar = new foo()
        ```

    2.  函数是通过 call 或 apply 被调用（明确绑定），甚至是隐藏在 bind 硬绑定 之中吗？如果是，this 就是那个被明确指定的对象。

        ```
        var bar = foo.call( obj2 )
        ```

    3.  函数是通过环境对象（也称为拥有者或容器对象）被调用的吗（隐含绑定）？如果是，this 就是那个环境对象。

        ```
        var bar = obj1.foo()
        ```

    4.  否则，使用默认的 this（默认绑定）。如果在 strict mode 下，就是 undefined，否则是 global 对象。

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

  3.  instanceof

      - instanceof 检测一个对象 A 是不是另一个对象 B 的实例的原理是：查看对象 B 的 prototype 指向的对象是否在对象 A 的[[prototype]]链上。

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

- 动画效果

  - CSS。animation: name duration timing-function delay iteration-count direction;

  - requestAnimationFrame()

# cookie & sessionStorage & localStorage

- cookie: 在浏览器和服务器端来回传递，存储容量小，只有大约 4K 左右

- sessionStorage: 仅在当前浏览器窗口关闭前有效

- localStorage: 始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据

# Http2.0 与 Http1.1 区别

1.  二进制格式而非文本格式。解析更高效，错误更少。

2.  多路复用。只需要一个连接就能处理多个请求，不会线端阻塞。

3.  报头压缩。降低开销。

4.  服务端推送。降低延迟。

# TCP & UDP

1.  TCP 是面向连接的，UDP 是无连接的即发送数据前不需要建立连接

2.  TCP 提供可靠的服务。也就是说，通过 TCP 连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP 尽最大努力交付，即不保证可靠交付。 并且因为 tcp 可靠，面向连接，不会丢失数据因此适合大数据量的交换。

3.  TCP 是面向字节流，UDP 面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如 IP 电话和视频会议等）。

4.  TCP 只能是 1 对 1 的，UDP 支持 1 对 1,1 对多。

5.  TCP 的首部较大为 20 字节，而 UDP 只有 8 字节。

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

> 函数式组件。我们标记组件为 functional，这意味它是无状态 (没有响应式数据)，无实例 (没有 this 上下文)。

# React

- React Dom 概念

- 组件 & Props

  - 组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的 React 元素。

  - 函数定义组件 / 类定义组件

    > 组件名称必须以大写字母开头

    > 组件的返回值只能有一个根元素，但是又可以通过数组的形式返回多个元素

    > 所有的 React 组件必须像纯函数那样使用它们的 props

    > 定义为类的组件有一些额外特性：局部状态

- State & 生命周期

  - 不要直接更新状态，应当使用 setState，构造函数是唯一能够初始化 state 的地方

  - 状态更新可能是异步的，所以不能依靠 props 和 state 值来计算下一个状态，可以使用这种形式的 setState()

    ```
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    }));
    ```

  - 数据流自顶向下

- 事件处理

  - 绑定类方法 / 属性初始化器语法 / 回调中使用箭头函数，建议 1,2

- 条件渲染 & 列表 & 条件渲染

  - 不同于 vue 中的指令，react 使用 js 的 if 和 map 函数进行条件和列表的渲染

- 表单

  - 受控组件 & 非受控组件

    - React 负责渲染表单的组件仍然控制用户后续输入时所发生的变化。相应的，其值由 React 控制的输入表单元素称为“受控组件”。这些组件的 value 值是由 state 控制，相应地，对每个表单组件都要添加事件处理程序。

    - 非受控组件指让表单数据由 DOM 处理，可以使用 ref 从 DOM 获取表单值

      1.  使用 React.createRef() 创建 refs,然后赋值给组件的 ref 属性，之后通过 ref 中的 current 属性对节点的引用进行访问

      2.  回调 ref，可以直接存储对于节点的引用

- 类型检查

  - import PropTypes from 'prop-types'

  - Flow | TypeScript (静态类型检查器)

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
  1.  例，SeaJS，推崇依赖就近

# 异步

- 回调函数
- 事件监听
- 发布/订阅
- Promise
- Generator 函数
- async & await
  - 优点
    1.  简洁
    2.  错误处理
    3.  条件分支的可读性
    4.  中间值
    5.  异常堆栈
    6.  调试
