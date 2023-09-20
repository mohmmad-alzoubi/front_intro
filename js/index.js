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

var _name = document.getElementsByClassName('skill')[0]

function myStyle(){
    _name.style.color = "red";
    _name.innerHTML = "experience"
    _name.style.fontSize = "bold"
    _name.style.fontFamily = "arial"
    _name.style.textAlign = "center"
}


var myForm = document.getElementsByClassName('userInput')[0]
var myInput = document.getElementsByClassName('input')[0]
var myName = document.getElementsByClassName('myName')[0]

myForm.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e)
    
    myName.innerHTML = myInput.value
    myInput.value = ""
})

var myFormSum = document.getElementsByClassName('sumation')[0]
var myInput1 = document.getElementsByClassName('num1')[0]
var myInput2 = document.getElementsByClassName('num2')[0]
var myResult = document.getElementsByClassName('result')[0]

myFormSum.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e)

    if((parseInt(myInput1.value) + parseInt(myInput2.value)) > 100){
        myResult.innerHTML = "Error the result is greater than 100"
    }else{
        myResult.innerHTML = "Error the result is less than 100"
    }
    myInput1.value = ""
    myInput2.value = ""
})

var myPrimeNumberOrNot = document.getElementsByClassName('primeNumberOrNot')[0]
var prime = document.getElementsByClassName('prime')[0]
var myResult1 = document.getElementsByClassName('result1')[0]

myPrimeNumberOrNot.addEventListener('submit',function(e){
    e.preventDefault();

    var primeOrNot = parseInt(prime.value);
    for(let i=2;i<primeOrNot;i++){
        if(primeOrNot%i == 0){
            myResult1.innerHTML = "number is not prime"
            break
        }else{
            myResult1.innerHTML = "number is prime"
        }
        prime.value = ""
    }
})

var evenOrOddNumber = document.getElementsByClassName('evenOrOddNumber')[0]
var evenOrOdd = document.getElementsByClassName('evenOrOdd')[0]
var myResult2 = document.getElementsByClassName('result2')[0]

evenOrOddNumber.addEventListener('submit',function(e){
    e.preventDefault()
    if(evenOrOdd.value%2){
        myResult2.innerHTML = "number is odd"
    }else{
        myResult2.innerHTML = "number is even"
    }
    evenOrOdd.value = ""
})

let text = ""
let num = 0
while(num < 5){
    text += "<br>The number is " + num
    num++
}
    
document.getElementById('text').innerHTML = text

let texts = ""
let nums = 0
do{
    texts += "<br>The number is " + nums
    nums++
}while(nums > 5)
    
document.getElementById('texts').innerHTML = texts

var backGroundButton = document.getElementById('changeBackGround');
function changeBackGround1(){
    if(document.body.style.backgroundColor == ""){
        document.body.style.backgroundColor = "red"
    }else{
        document.body.style.backgroundColor = ""
    }
}