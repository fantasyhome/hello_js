function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

const fnInside = outside(3); // 可以这样想：给我一个可以将提供的值加上 3 的函数
// 一个闭包必须保存它可见作用域中所有参数和变量。因为每一次调用传入的参数都可能不同，
// 每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的 inside 没有再被引用时，内存才会被释放
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8

// 闭包实现私有状态
function BankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = BankAccount();

account.deposit(100);

console.log(account.getBalance()); // 100