
const arr = [10, 2, 5, 1, 3, 6, 8, 3];

/*     Transfor the Array into double, triple And Binary.    */
// 1. double
function double(x) {
    return x * 2;
}

const doubleOutput = arr.map(double);
console.log(doubleOutput);

// 2. triple
function triple(x) {
    return x * 3;
}

const tripleOutput = arr.map(triple);
console.log(tripleOutput);

// 3. binary

const binaryOutput = arr.map((x) => x.toString(2));
console.log(binaryOutput);

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

/*    1. List of Full Names of Employees.  */

const fullNames = employees.map((x) => x.firstName + " " + x.lastName);
console.log(fullNames);


/*     2. Find out the First Name of Employee Who's Age is greater than 25. */

const ageOfEmployees = employees.filter((x) => x.age > 25).map((x) => x.firstName);
console.log(ageOfEmployees);

/*     3. Find out the First Name of Employee Who's salary is greater than 700000. */

const salaryOfEmployees = employees.filter((x) => x.salary > 700000).map((x) => x.firstName);
console.log(salaryOfEmployees);