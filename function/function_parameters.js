// pass an object as a parameter,visible
function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

// pass an array as a parameter,visible
function myFunc2(theArr) {
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc2(arr);
console.log(arr[0]); // 30

// Parameters are essentially passed to functions by value
const square = function (number) {
    number = number * number;
    return number;
};

a = 4

console.log(square(a)); // 16

console.log(a);// 4

// 旧不定参数写法，arguments是假数组
function myConcat(separator) {
    let result = ""; // 初始化列表
    // 迭代 arguments
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}

console.log(myConcat("、", "红", "橙", "蓝"));
// "红、橙、蓝、"

// 现代JS写法，theArgs有所有数组的方法
function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
}

const arr2 = multiply(2, 1, 2, 3);
console.log(arr2); // [2, 4, 6]