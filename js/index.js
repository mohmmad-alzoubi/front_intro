// alert("Hello World!")
console.log("Hello World!")

// Function in js 
// data type in js 
// 1. Number
// number :
// 1. Integer 
// 2. Float 

// 2. String 
// 3. Boolean 
// 4. Undefined
// 5. Null 
// 6. Object 
// 7. Array 

// Declare variable in js 
// 1. var varName = value; 
var num1 = 10;
var num2 = 20; 
var numX;
console.log(numX)
var numX1 = null;
console.log(numX1)
console.log(num1)
console.log(typeof (num1))

// ESlint 

// 2. let varName = value; 
let name1 = "ahmed";
console.log(typeof (name1))
var test1 = true
var test2 = false
console.log("this is test 2", test2)
console.log("this is test 1", test1)

//  var vs let 
// var is global scope 
// var is local scope 
var person1 = [ 'ahmed', 25, 'irbid', 'jordanian' ]
var person2 = [ 'mohammad', 30, 'amman', 'jordanian', ['html','css','js']]
console.log("i am person 2",person2[4][1])
console.log("i am person 1",person1[2])

// object 
var person3 = {
    name: 'ahmed',
    age: 25,
    city: 'irbid',
    nationality: 'jordanian',
    skills: ['html', 'css', 'js']
}
console.log(person3.name)
console.log(person3.skills[1])

// const 
// const varName = value; 
const pi = 3.14
// pi = 3.15 (Error) 
console.log(pi)
