var calculateBtn = document.getElementById("calculate");
var clearBtn = document.getElementById("clear");

var calculateBtnTwo = document.getElementById("calculateBtnTwo");
var clearBtnTwo = document.getElementById("clearBtnTwo");


calculateBtn.addEventListener("click", convertToKilograms);
clearBtn.addEventListener("click", reset);

calculateBtnTwo.addEventListener("click", convertToPounds);
clearBtnTwo.addEventListener("click", reset);

function convertToKilograms() {
    var lb = document.getElementById("txtInput").value;
    var x = document.getElementById("result");

    //1 pound (lb) is equal to 0.45359237 kilograms (kg)
    if (lb.length == 0) {
        var sentence = "You haven't added any input";
        x.style.color = "red";
        x.innerHTML = sentence;
    } else {
        var result = lb * 0.45359237;
        var sentence = "The weight of " + String(lb) + " pounds in kilograms is " + String(result);
        x.style.color = "black";
        x.innerHTML = sentence;
    }
}

function convertToPounds() {
    var kg = document.getElementById("txtInput2").value;
    var x = document.getElementById("result2");

    //1 kilogram is approximately equal to 2.2046226218 lbs
    if (kg.length == 0) {
        var sentence = "You haven't added any input";
        x.style.color = "red";
        x.innerHTML = sentence;
    } else {
        var result = kg * 2.2046226218;
        var sentence = "The weight of " + String(kg) + " kilograms in pounds is " + String(result);
        x.style.color = "black";
        x.innerHTML = sentence;
    }
}

function reset() {
    document.getElementById("txtInput").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("txtInput2").value = "";
    document.getElementById("result2").innerHTML = "";
}
