const arr = [10, 2, 5, 1, 3, 6, 8, 3];

/* Filter Odd Values */

function isOdd(x) {
    return x % 2;
}

const oddValues = arr.filter(isOdd);
console.log(oddValues);


/* Filter Even Values */

function isEven(x) {
    return x % 2 === 0;
}

const evenValues = arr.filter(isEven);
console.log(evenValues);


/* Find All the Values which are greater than 5 */

function isGreaterThanFive(x) {
    return x > 5;
}

const greaterThanFive = arr.filter(isGreaterThanFive);
console.log(greaterThanFive);


/* Find All the Values which are Less than 5 */

const lessThanFive = arr.filter((x) => x < 5);
console.log(lessThanFive);

console.log("----------------------------------------------------")

/*   Employee Data  */

const employees = [
    { firstName: "Mangesh", lastName: "Bhujang", age: 25, salary: 500000 },
    { firstName: "Rajesh", lastName: "Pawar", age: 23, salary: 400000 },
    { firstName: "Sumit", lastName: "Raj", age: 26, salary: 500000 },
    { firstName: "Avinash", lastName: "Patil", age: 27, salary: 700000 },
    { firstName: "Sneha", lastName: "Gaikwad", age: 29, salary: 1000000 },
    { firstName: "Pradip", lastName: "Pawar", age: 21, salary: 900000 },
    { firstName: "Akshay", lastName: "Nimrat", age: 30, salary: 900000 },
    { firstName: "Amruta", lastName: "Patil", age: 24, salary: 300000 },
];




/*     1. Employee Who's Age is less than 25. */

const ageOfEmployees = employees.filter((x) => x.age < 25);
console.log(ageOfEmployees);

console.log("----------------------------------------------------")
/*     2. Employee Who's salary is less than 700000. */

const salaryOfEmployees = employees.filter((x) => x.salary < 700000);
console.log(salaryOfEmployees);