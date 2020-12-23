//工厂函数
function animal(name, sex) {
    let obj = new Object()
    obj.name = name
    obj.sex = sex
    obj.saySex = function () {
        alert(`我的性别是${this.sex}`)
    }
    return obj
}
let monkey1 = animal('猴子', '母')
console.log(monkey1.name) //猴子
monkey1.saySex() //我的性别是母
/*
这样写主要是为了解决需要创建大量有属性重叠的对象，如果每个都new一下，然后逐一添加属性。
这也是个累人的活。通过上面的代码中，我们声明了一个animal方法，此方法可批量制造动物。
这样每次只需要简单的一行代码就可以搞定一个动物的创建

缺点:
每次新建的时候都需要在内部创建一个对象，然后进行一系列操作，最后返回。
也就是说创建十次，那么就会创建十次全新的对象，然后返回并赋值。
这样创建的十个对象在代码间的关系是没有的。而且跟animal函数也没有任何关系了。
只跟Object有关系

我需要判断树是不是动物类型,你会发现你并没办法。只能知道他是Object
*/

function Animal(name, sex) {
    this.name = name
    this.sex = sex
    this.saySex = function () {
        alert(`我的性别是${this.sex}`)
    }
}
let monkey2 = new Animal('猴子', '母')
console.log(monkey2.name) //猴子
monkey2.saySex() //我的性别是母

/*
跟工厂函数很像，只是没有了创建对象和return，并且用this添加属性。
声明新对象的时候通过new关键字。这样做的好处是，新建的对象间是有关系的，我们检测下：
*/
console.log(monkey2 instanceof animal)     //true
console.log(monkey2 instanceof Object)     //true复制代码

//my idea
function myAnimal(name, sex) {
    let obj = new Animal(name, sex)
    obj.saySex = function () {
        alert(`我的性别是${this.sex}`)
    }
    return obj
}