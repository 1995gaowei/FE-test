# HTML

- 事件
    1. DOM0级事件，由JavaScript指定事件处理程序，冒泡阶段被处理
        ```
        element.onclick = () => { console.log('click) }
        ```
    2. DOM2级事件，定义了2个方法，addEventListener()和removeEventListener()，3个参数：要处理的事件名，回调，布尔（true：捕获阶段，false：冒泡阶段）；可以添加多个事件处理程序

# CSS

- 继承属性 （font, text-align, line-height, color, visibility, cursor...）

# JS

- 基本类型和引用类型
    1. 访问变量有按值和按引用两种方式，而参数只能按值传递
    2. 基本数据类型检测用typeof，引用类型使用instanceof操作符

- 作用域
- this
- 闭包，有权访问另一个函数作用域中的变量的函数

- 面向对象
    1. - 数据属性：configurable, enumerable, value, writable
        - 访问器属性：configurable, enumerable, get, set
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

- ===运算符判断相等的流程是怎样的
    1. 如果两个值不是相同类型，它们不相等
    2. 如果两个值都是null或者都是undefined，它们相等
    3. 如果两个值都是布尔类型true或者都是false，它们相等
    4. 如果其中有一个是NaN，它们不相等
    5. 如果都是数值型并且数值相等，他们相等， -0等于0
    6. 如果他们都是字符串并且在相同位置包含相同的16位值，他它们相等；如果在长度或者内容上不等，它们不相等；两个字符串显示结果相同但是编码不同==和===都认为他们不相等
    7. 如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等

- ==运算符判断相等的流程是怎样的
    1. 如果两个值类型相同，按照===比较方法进行比较
    2. 如果类型不同，使用如下规则进行比较
    3. 如果其中一个值是null，另一个是undefined，它们相等
    4. 如果一个值是数字另一个是字符串，将字符串转换为数字进行比较
    5. 如果有布尔类型，将true转换为1，false转换为0，然后用==规则继续比较
    6. 如果一个值是对象，另一个是数字或字符串，将对象转换为原始值然后用==规则继续比较
    7. 其他所有情况都认为不相等

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
    1. mouseover/mouseout是冒泡事件；mouseenter/mouseleave不冒泡。需要为多个元素监听鼠标移入/出事件时，推荐mouseover/mouseout托管，提高性能
    2. mouseover/mouseout是标准事件，所有浏览器都支持；mouseenter/mouseleave是IE5.5引入的特有事件后来被DOM3标准采纳，现代标准浏览器也支持

- sessionStorage,localStorage,cookie区别
    1. 都会在浏览器端保存，有大小限制，同源限制
    2. cookie会在请求时发送到服务器，作为会话标识，服务器可修改cookie；web storage不会发送到服务器
    3. cookie有path概念，子路径可以访问父路径cookie，父路径不能访问子路径cookie
    4. 有效期：cookie在设置的有效期内有效，默认为浏览器关闭；sessionStorage在窗口关闭前有效，localStorage长期有效，直到用户删除
    5. 共享：sessionStorage不能共享，localStorage在同源文档之间共享，cookie在同源且符合path规则的文档之间共享
    6. localStorage的修改会促发其他文档窗口的update事件
    7. cookie有secure属性要求HTTPS传输
    8. 浏览器不能保存超过300个cookie，单个服务器不能超过20个，每个cookie不能超过4k。web storage大小支持能达到5M

- 阻止冒泡和默认事件
    1. 冒泡：e.stopPropagation,IE下为cancelBubble=true
    2. 默认事件，e.preventDefault(),e.returnValue=false,return false(用来取消对象属性注册的处理程序)

# Web安全

- XSS （跨站脚本攻击）

- CSRF （跨站点请求伪造）

- HTTPS （HTTP+SSL）
    1. 通信加密
    2. 证书认证
    3. 完整性保护
