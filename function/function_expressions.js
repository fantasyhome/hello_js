// a function can be defined based on a condition
let myFunc;
num = 9
// === is a strict equality operator. It compares both the type and the value simultaneously. It returns true only if both
//     are identical. Unlike ==, it does not automatically convert types.
if (num === 0) {
    myFunc = function (theObject) {
        theObject.make = "Toyota";
    };
}

console.log(square(5)); // 25
// JavaScript 解释器会将整个函数声明提升到当前作用域的顶部
function square(n) {
    return n * n;
}