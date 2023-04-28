//var x = document.getElementById("btn")
/*
var button = document.querySelector("#btn")
var button2 = document.querySelector("#btn2")
button.addEventListener("click", doSomething)
function doSomething(){   
    alert("Hello World")
}
button2.addEventListener("mouseover", turnBlue)

function turnBlue(){
    document.body.style.backgroundColor = "blue";
}*/
var calculateBtn = document.getElementById("calculate")
var clearBtn = document.getElementById("clear")

var calculateBtnTwo = document.getElementById("calculateTwo")
var clearBtn2 = documents.getElementById("clearBtnTwo")


calculateBtn.addEventListener("click", temperature)
clearBtn.addEventListener("click", reset)


// Celsius = (F - 32) x .5556
function temperature(x){
  var temp = document.getElementById("txtInput").value
  var x = document.getElementById("result")
   
  //DRY
   //Dont
   //Repeat
   //Yourself
  
  //User validation
  if (temp.length == 0){
    var sentence = "You havent added any input"
    x.style.color = "red"
    x.innerHTML = sentence
  }else{
     var result = (temp-32)*.5556 
     var sentence = "The temperature of " + String(temp) + " F in Celsius is " + String(result)
      x.style.color = "black"
      x.innerHTML = sentence
  }

}



function reset(){
  document.getElementById("txtInput").value = ""
  document.getElementById("result").innerHTML = ""
}

calculateBtn.addEventListener("click", temperatureTwo)
clearBtn.addEventListener("click", reset)

function tempratureTwo () {
  
}