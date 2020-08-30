var person = {
    firstName: "Bill",
    lastName: "Gates",
    age: 62,
    eyeColor: "blue",
    sayThis() {
        console.log(this)
    }
};
person.sayThis()