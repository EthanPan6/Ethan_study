/*
确保某个类只有一个实例,而且自行实例化并向整个系统提供这个实例
*/

//“透明版” 单例模式

let CreateSingleton = (function(){
    let instance;
    return function(name) {
        if (instance) {
            return instance;
        }
        this.name = name;
        return instance = this;
    }
})();
CreateSingleton.prototype.getName = function() {
    console.log(this.name);
}

let Winner = new CreateSingleton('Winner');
let Looser = new CreateSingleton('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'