# 模拟Javascript事件

　　在javascript编程中，事件是用来描述网页中某一特定有趣时刻的，众所周知事件通常是在由用户和浏览器进行交互时触发，其实不然，通过Javascript可以在任何时间触发特定的事件，并且这些事件与浏览器创建的事件是相同的。

　　会有适当的事件冒泡，并且浏览器会执行分配的事件处理程序。这种能力在测试web应用程序的时候，是非常有用的，在DOM 3级规范中提供了方法来模拟特定的事件，IE9 chrome FF Opera 和 Safari都支持这样的方式，在IE8及以前的办法的IE浏览器有他自己的方式来模拟事件。

## Dom 事件模拟 

　　可以通过document上的 **createEvent()** 方法，在任何时候创建事件对象，此方法只接受一个参数，既要创建事件对象的事件字符串，在DOM2 级规范上所有的字符串都是复数形式，在DOM 3级事件上所有的字符串都采用单数形式，所有的字符串如下： 
+ **UIEvents**：通用的UI 事件，鼠标事件键盘事件都是继承自UI事件，在DOM 3 级上使用的是 UIEvent。 
+ **MouseEvents**：通用的鼠标事件，在DOM 3 级上使用的是 MouseEvent。 
+ **MutationEvents**：通用的突变事件，在DOM 3 级上使用的是 MutationEvent。 
+ **HTMLEvents**：通用的HTML事件，在DOM3级上还没有等效的。 

注意，ie9是唯一支持DOM3级键盘事件的浏览器，但其他浏览器也提供了其他可用的方法来模拟键盘事件。 
一旦创建了一个事件对象，就要初始化这个事件的相关信息，每一种类型的事件都有特定的方法来初始化，在创建完事件对象之后，通过`dispatchEvent()`方法来将事件应用到特定的dom节点上，以便其支持该事件。这个`dispatchEvent()`事件，支持一个参数，就是你创建的event对象。

## 鼠标事件模拟 
　　鼠标事件可以通过创建一个鼠标事件对象来模拟（mouse event object），并且授予他一些相关信息，创建一个鼠标事件通过传给 **createEvent()** 方法一个字符串"MouseEvents"，来创建鼠标事件对象，之后通过iniMouseEvent()方法来初始化返回的事件对象，iniMouseEvent()方法接受15参数，参数如下： 

+ type string类型 ：要触发的事件类型，例如‘click'。 
+ bubbles Boolean类型：表示事件是否应该冒泡，针对鼠标事件模拟，该值应该被设置为true。 
+ cancelable bool类型：表示该事件是否能够被取消，针对鼠标事件模拟，该值应该被设置为true。
+ view 抽象视图：事件授予的视图，这个值几乎全是document.defaultView. 
+ detail int类型：附加的事件信息这个初始化时一般应该默认为0。 
+ screenX int类型 ： 事件距离屏幕左边的X坐标 
+ screenY int类型 ： 事件距离屏幕上边的y坐标 
+ clientX int类型 ： 事件距离可视区域左边的X坐标 
+ clientY int类型 ： 事件距离可视区域上边的y坐标 
+ ctrlKey Boolean类型 ： 代表ctrol键是否被按下，默认为false。 
+ altKey Boolean类型 ： 代表alt键是否被按下，默认为false。 
+ shiftKey Boolean类型 ： 代表shif键是否被按下，默认为false。 
+ metaKey Boolean类型： 代表meta key 是否被按下，默认是false。 
+ button int类型： 表示被按下的鼠标键，默认是零. 
+ relatedTarget (object) ： 事件的关联对象.只有在模拟mouseover 和 mouseout时用到。

注意，initMouseEvent()的参数直接与event对象相映射，其中前四个参数是由浏览器用到，只有事件处理函数用到其他的参数，当事件对象作为参数传给dispatch()方式，target属性将会自动被赋上值。

例子， 代码示例:
```js
　　var btn = document.getElementById("myBtn"); 
　　var event = document.createEvent("MouseEvents"); 
　　event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0,false, false, false, false, 0, null); 
　　btn.dispatchEvent(event);
```
在DOM实现的浏览器中，所有其他的事件都包括dbclick，都可以通过相同的方式来实现。 

## 键盘事件模拟 

　　键盘事件已经从DOM2级事件中移出了，起初在DOM2级事件的草案版中，键盘事件是作为草案的一部分的，但在最终版被移出了，FF已经实现了草案版中的键盘事件，值得注意的是在DOM3级事件中实现的键盘事件与DOM2级事件草案版中的键盘事件还是存在很大差异的。 

　　在dom3级事件中创建一个键盘事件对象是通过 **createEvent()** 方法，并传入KeyBoardEvent字符串作为参数，对返回的event对象，调用initKeyBoadEvent()方法初始化，初始化键盘事件的参数有以下几个： 
+ type (string) - 要触发的事件类型,例如"keydown". 
+ bubbles (Boolean) — 代表事件是否应该冒泡. 
+ cancelable (Boolean) — 代表事件是否可以被取消. 
+ view (AbstractView) — 被授予事件的是图. 通常值为：document.defaultView. 
+ key (string) — 按下的键对应的code. 
+ location (integer) — 按下键所在的位置. 0 ：默认键盘, 1 左侧位置, 2 右侧位置, 3 数字键盘区, 4 虚拟键盘区, or 5 游戏手柄. 
+ modifiers (string) — 一个有空格分开的修饰符列表. 
+ repeat (integer) — 一行中某个键被按下的次数.

注意，在DOM3事件中，费掉了keypress事件，因此按照下面的方式，你只能模拟键盘上的keydown 和 keyup事件。 

代码示例:
```js
var textbox = document.getElementById("myTextbox"),event; 
　　　　if (document.implementation.hasFeature("KeyboardEvents", "3.0")){ 
　　　　　　event = document.createEvent("KeyboardEvent"); 
　　　　　　event.initKeyboardEvent("keydown", true, true, document.defaultView, "a",0, "Shift", 0); 
　　　　} 
　　　　textbox.dispatchEvent(event);
```

　　在FF下，允许你通过使用document.createEvent('KeyEvents'),这种方式来创建键盘事件，初始化的方法为initKeyEvent()，这个方法接受10个参数， 
　
+ type (string) — 要触发的事件类型,例如"keydown". 
+ bubbles (Boolean) — 代表事件是否应该冒泡. 
+ cancelable (Boolean) — 代表事件是否可以被取消. 
+ view (AbstractView) — 被授予事件的是图. 通常值为：document.defaultView. 
+ ctrlKey (Boolean) — 代表ctrol键是否按下. 默认 false. 
+ altKey (Boolean) — 代表alt键是否按下. 默认 false. 
+ shiftKey (Boolean) — 代表shift键是否按下. 默认 false. 
+ metaKey (Boolean) — 代表meta键是否按下. 默认 false. 
+ keyCode (integer) — 键按下或释放时键所对应的键码. 默认是0； 
+ charCode (integer) — 按下的键的字符所对应的ASCII code.是共keypress事件使用的 默认是0. 
 
## 模拟其他事件 

　　鼠标事件和键盘事件是在浏览器中最长被模拟的事件，，但是某些时候同样需要模拟突变事件和HTML事件。可以用createEvent('MutationEvents'),来创建一个突变事件对象，可以采用initMutationEvent()来初始化这个事件对象，参数包括type, bubbles, cancelable, relatedNode, prevValue, 
newValue, attrName, 和attrChange.可以采用下面的方式来模拟一个突变事件： 
 
复制代码代码示例:
```js
　　var event = document.createEvent('MutationEvents'); 
　　event.initMutationEvent("DOMNodeInserted", true, false, someNode, "","","",0); 
　　target.dispatchEvent(event);
```
对于HTML事件，直接上代码。 
 

复制代码代码示例:
```js
　　var event = document.createEvent("HTMLEvents"); 
　　event.initEvent("focus", true, false); 
　　target.dispatchEvent(event);
```
对于突变事件和HTML事件是很少在浏览器中用到，因为他们收应用程序的限制。

## 定制DOM事件 

　　在DOM3级事件中定义了一类事件称之为 custom event，我称之为客户事件，客户事件不会原生的被dom触发，而是直接提供，以至于开发者可以创建他们自己的事件，你可以创建一个自己的客户事件，通过调用createEvent('CustomEvent'),对返回的事件对象调用，initCustomEvent()方法，其中传递四个参数type，bubbles，cancelable，detail。ps:小弟对这部分理解有限，在这里只是抛砖引玉。

## IE中的事件模拟 
　　从IE8，以及更早版本的IE，都在模仿DOM模拟事件的方式：创建事件对象，初始化事件信息，之后触发事件。当然IE在完成这几个步骤的过程是不同的。 
首先不同于dom中创建event对象的方法，IE采用document.createEventObject()方法，并且没有参数，返回一个通用的事件对象，接下来要对返回的event对象赋值，此时ie并没有提供初始化函数，你只能采用物理方法一个一个的赋值，最后在目标元素上调用fireEvent()方法，参数为两个：事件处理的名称和创建的事件对象。当fireEvent方法被调用的时候，event对象的srcElement和type属性将会被自动赋值，其他将需要手动赋值。

例子： 
复制代码代码示例:
```js
　var btn = document.getElementById("myBtn"); 
　　var event = document.createEventObject(); 
　　event.screenX = 100; 
　　event.screenY = 0; 
　　event.clientX = 0; 
　　event.clientY = 0; 
　　event.ctrlKey = false; 
　　event.altKey = false; 
　　event.shiftKey = false; 
　　event.button = 0; 
　　btn.fireEvent("onclick", event);
```
　　这个例子创建了一个事件对象，之后通过一些信息初始化该事件对象，注意事件属性的赋值是无序的，对于事件对象来说这些属性值不是很重要，因为只有事件句柄对应的处理函数（event handler）会用到他们。对于创建鼠标事件、键盘事件还是其他事件的事件对象之间是没有区别的，因为一个通用的事件对象，可以被任何类型的事件触发。

　　注意，在Dom的键盘事件模拟中，对于一个keypress模拟事件的结果不会作为字符出现在textbox中，即使对应的事件处理函数已经触发。

　　与DOM事件模拟相比，个人觉得IE的事件模拟更容易让人记忆和接受，统一的事件模型可以带来一些便捷。