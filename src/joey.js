// John Biehl
// 10-12-2023

"use strict";

// Reduce the ammount of code by turning document.querySelector() into a $
const $ = selector => document.querySelector(selector);
// Error message
const getErrorMsg = lbl=> `${lbl} entry must be a valid number that is greater than 0`
// Focus and Select field for reentry
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// validate entry function
function testSpeedTime(mph,hrs) {
    let v = false;

    if (isNaN(mph) || mph <= 0) {
        alert(getErrorMsg("Speed in Mph"));
        focusAndSelect("#speed");
    }else if (isNaN(hrs) || hrs <= 0 ) {
        alert(getErrorMsg("Hours"));
        focusAndSelect("#time");
    } else {
        v = true;
    }
    return v;
}

// function to determine and display the distance
function findDistance(){
    const speed = parseFloat($("#speed").value);
    const time = parseFloat($("#time").value);

    if (testSpeedTime(speed, time)){
        $("#distance").value = time*speed;
        focusAndSelect("#speed");
    }

}

// function to clear distance
function clearDistance(){
    $("#distance").value="";
}

// function that clears input and output
function clearAll(){
    clearDistance();
    $("#speed").value="";
    $("#time").value="";
    focusAndSelect("#speed");
}


// Listeners
document.addEventListener("DOMContentLoaded", () => {
    $("#speed").addEventListener("input",clearDistance);
    $("#time").addEventListener("input", clearDistance);
    $("#enter").addEventListener("click", findDistance);
    $("#clear").addEventListener("click", clearAll);
});
