function foo() {
    console.log(111);
    setTimeout(() => console.log(222), 5);
}
for (let i = 0; i < 2888; i++) {
    foo()
}