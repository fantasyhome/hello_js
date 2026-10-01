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