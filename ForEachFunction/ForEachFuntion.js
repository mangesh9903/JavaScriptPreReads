let students = ['Mangesh', 'Ram', 'Jayesh'];

/* using forEach */
students.forEach(myFunction);

function myFunction(item, index, arr) {

    // adding strings to the array elements
    arr[index] = 'Hello ' + item;
}

console.log(students);

/* with arrow function and callback */


students.forEach(element => {
    console.log(element);
});

/*           forEach With Map           */

let map = new Map();

map.set('name', 'Mangesh');
map.set('age', '25');

map.forEach(myFunction);

function myFunction(value, key) {

    console.log(key + '- ' + value);
}