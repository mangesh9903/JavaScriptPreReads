const arr = [10, 2, 5, 1, 3, 6, 8, 3];

/*  Solving Sum of Array in the Traditional Way.   */

function findSum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
    }
    return sum;
}

console.log(findSum(arr));

console.log("------------------------------------------------------------");

/*  Solving Sum of Array Using Reduce Function.   */

const findSumUsingReduce = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(findSumUsingReduce)

console.log("------------------------------------------------------------");

/*  Getting Maximum value of Array in the Traditional Way.   */

function findMax(arr) {
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
}

console.log(findMax(arr));
console.log("------------------------------------------------------------");
/*  Solving Sum of Array Using Reduce Function.   */

const findMaxUsingReduce = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(findMaxUsingReduce)

console.log("------------------------------------------------------------");

/*   Employee Data  */

const employees = [
    { firstName: "Mangesh", lastName: "Bhujang", age: 25, salary: 500000 },
    { firstName: "Rajesh", lastName: "Pawar", age: 23, salary: 400000 },
    { firstName: "Sumit", lastName: "Raj", age: 26, salary: 500000 },
    { firstName: "Avinash", lastName: "Patil", age: 27, salary: 700000 },
    { firstName: "Sneha", lastName: "Gaikwad", age: 29, salary: 1000000 },
    { firstName: "Pradip", lastName: "Pawar", age: 29, salary: 900000 },
    { firstName: "Akshay", lastName: "Nimrat", age: 30, salary: 900000 },
    { firstName: "Amruta", lastName: "Patil", age: 24, salary: 300000 },
];

/*      How Many Employees have a perticular age.      */

const findAge = employees.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(findAge);