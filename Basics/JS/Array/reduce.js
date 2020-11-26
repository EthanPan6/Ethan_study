let res = [0, 1, 2, 3, 4].reduce(
    (accumulator, currentValue, currentIndex, array) => {
        console.log(accumulator, currentValue, currentIndex, array);
        return accumulator + currentValue;
    },
    10
);
console.log(res);