//Declare variables
var placeholder1 = "" 
var placeholder2 = ""
var mathOperation = ""

//Grab the button value
var resultValue = document.getElementById("resultValue")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var zero = document.getElementById("zero")
var clear = document.getElementById("clear")

//Math operations
var plus = document.getElementById("plus")
var subtract = document.getElementById("minus")
var mult = document.getElementById("multiply")
var divide = document.getElementById("divide")
var equal = document.getElementById("equal")

//Add event listener
one.addEventListener("click", displayOne)
two.addEventListener("click", displayTwo)
three.addEventListener("click", displayThree)
four.addEventListener("click", displayFour)
five.addEventListener("click", displayFive)
six.addEventListener("click", displaySix)
seven.addEventListener("click", displaySeven)
eight.addEventListener("click", displayEight)
nine.addEventListener("click", displayNine)
zero.addEventListener("click", displayZero)
equal.addEventListener("click", result)
clear.addEventListener("click", reset)

//Math Operations events
plus.addEventListener("click", addition)
subtract.addEventListener("click", subtraction)
mult.addEventListener("click", multiplication)
divide.addEventListener("click", division)

//Function
function displayOne() {
  placeholder1 += "1"
  resultValue.innerHTML = placeholder1
}
function displayTwo() {
  placeholder1 += "2"
  resultValue.innerHTML = placeholder1
}
function displayThree() {
  placeholder1 += "3"
  resultValue.innerHTML = placeholder1
}
function displayFour() {
  placeholder1 += "4"
  resultValue.innerHTML = placeholder1
}
function displayFive() {
  placeholder1 += "5"
  resultValue.innerHTML = placeholder1
}
function displaySix() {
  placeholder1 += "6"
  resultValue.innerHTML = placeholder1
}
function displaySeven() {
  placeholder1 += "7"
  resultValue.innerHTML = placeholder1
}
function displayEight() {
  placeholder1 += "8"
  resultValue.innerHTML = placeholder1
}

function displayNine() {
  placeholder1 += "9"
  resultValue.innerHTML = placeholder1
}
function displayZero() {
  placeholder1 += "0"
  resultValue.innerHTML = placeholder1
}

function addition(){
  mathOperation = "+"
  placeholder2 = placeholder1
  placeholder1 = ""
  resultValue.innerHTML = placeholder1
  
  console.log("The math operation is ", mathOperation)
  console.log("The placeholder2 is ", placeholder2)
  console.log("The placeholder1 is ", placeholder1)
  
}

function subtraction(){
  mathOperation = "-"
  placeholder2 = placeholder1
  placeholder1 = ""
  resultValue.innerHTML = placeholder1
  
  console.log("The math operation is ", mathOperation)
  console.log("The placeholder2 is ", placeholder2)
  console.log("The placeholder1 is ", placeholder1)
}

function multiplication(){
  mathOperation = "*"
  placeholder2 = placeholder1
  placeholder1 = ""
  resultValue.innerHTML = placeholder1
  
  console.log("The math operation is ", mathOperation)
  console.log("The placeholder2 is ", placeholder2)
  console.log("The placeholder1 is ", placeholder1)
}

function division(){
  mathOperation = "/"
  placeholder2 = placeholder1
  placeholder1 = ""
  resultValue.innerHTML = placeholder1
  
  console.log("The math operation is ", mathOperation)
  console.log("The placeholder2 is ", placeholder2)
  console.log("The placeholder1 is ", placeholder1)
}

function result(){
  var finalResult
  if (mathOperation == "+"){
    finalResult = parseInt(placeholder1) + parseInt(placeholder2)
    resultValue.innerHTML = finalResult
  }
  else if(mathOperation == "-"){
    finalResult = parseInt(placeholder1) - parseInt(placeholder2)
    resultValue.innerHTML = finalResult
  }
  else if (mathOperation == "*"){
    finalResult = parseInt(placeholder1) * parseInt(placeholder2)
    resultValue.innerHTML = finalResult
  }
  else if (mathOperation == "/"){
    finalResult = parseInt(placeholder2) / parseInt(placeholder1)
    resultValue.innerHTML = finalResult
  }
  
}
function reset(){
  placeholder1 = ""
  placeholder2 = ""
  mathOperation = ""
  resultValue.innerHTML = ""
  
}

