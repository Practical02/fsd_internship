// console.log("Hello World")

// var a=3;

// console.log(a);

// let a=10;
// let b= 20;
// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log(a-b);
// console.log(b%a);

// let a=10;
// let b=10;
// let c="10";

// if(a==b){
//     console.log(true)
// }else{
//     console.log(false)
// }

// if(a==c){ //check for value only, do not consider data type
//     console.log(true)
// }else{
//     console.log(false)
// }

// if(a===c){ //check for data type too
//     console.log(true)
// }else{
//     console.log(false)
// }

// let a="HEllo";
// let b="World";

// console.log(`Random : ${a} & ${b}`);

// || -> OR operator
// && -> And Operator

// Data types

//Primitive

// Number
// String
// Boolean
// Null
// Undefined

// Reference type

// Objects
// Arrays
// functions

//Objects

// let car = {
//     model:"Land Cruiser",
//     color:"white",
//     price:"1.5",
// }
// console.log(car);
// console.log(car.color);
// console.log(`THat was a ${car.color} coloured ${car.model}`);

// let person = {
//     name:"Amal Manoj",
//     college:"Christ College of Engineering, Irinjalakuda",
//     class:"S4 CSE",
//     address:{
//         house_name:"Cheruvathoor",
//         place:"Pengamuck",
//         pincode:"680544"
//     }

// }

// console.log(person);
// console.log(`My name is ${person.name} and im studying in ${person.class} at ${person.college} and my address is ${person.address.house_name}`);

// console.log(`${person.address.house_name} ${person.name}`)

// // Array
// let arr = ["apple",10,true];
// console.log(arr);

// console.log(arr[0]);

// console.log(arr.length);

// let fruits = ["apple"];
// fruits[1] = "grape";

// fruits.push("dkjsa");

// fruits.unshift("killua");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// let todo = [
//   { id: 1, task: "do this" },
//   { id: 2, task: "do that" },
//   { id: 3, task: "djfhsk" },
// ];
// console.log(todo[0].task);

// function addd(a,b) {
//     console.log(a+b);
// }

// function multiply(a,b) {
//     console.log(a*b);
// }

// function divide(a,b) {
//     console.log(a/b);
// }

// addd(10,20);
// multiply(10,20);
// divide(5,2);

// add = (a,b) => {console.log(a+b)};
// prod = (a,b) => console.log(a*b);
// div = (a,b) => console.log(a/b);

// add(10,22);
// prod(10,3);
// div(5,2);

// comp = (a, b) =>
//   a + b > 10
//     ? console.log(`${a + b} is greater than 10`)
//     : console.log(`${a + b} is not greater than 10`);

// comp(2, 5);
// comp(5, 23);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

printArr = (a) => {
  for (let i of a) {
    console.log(i);
  }
};

printArr(numbers);

printWhile = (a) => {
  let i = 0;
  while (i < a.length) {
    console.log(a[i]);
    i++;
  }
};

printWhile(numbers);

printDo = (a) => {
  let i = 0;
  do {
    console.log(a[i]);
    i++;
  } while (i < a.length);
};

printDo(numbers);