"use strict";function Person(e,o,t,s){this.firstName=e,this.lastName=o,this.age=t,this.eyeColor=s}Person.prototype.nationality="English";var myFather=new Person("Bill","Gates",62,"blue"),myMother=new Person("Steve","Jobs",56,"green");console.log(Person),console.log(myFather.__proto__),console.log(myFather.nationality);