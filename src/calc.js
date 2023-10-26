// Created by John Biehl
// 9-28-2023

"use strict"

const $ = selector => document.querySelector(selector);
const getErrorMsg = lbl => `${lbl} must be a valid number`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// Checks whether the number entered are valid
function isValid(n1, n2) {
    let v = false;

    if (isNaN(n1)) {
        alert(getErrorMsg("Number 1"));
        focusAndSelect("#num1");
    } else if (isNaN(n2)) {
        alert(getErrorMsg("Number 2"));
        focusAndSelect("#num2");
    } else {
        v = true;
    }
    return v;
}

// function to add values
function addFunc() {
    const number1 = parseFloat($("#num1").value);
    const number2 = parseFloat($("#num2").value);

    if (isValid(number1, number2)) {
        const answer = number1 + number2;
        document.querySelector("#answer").value = number1 + " + " + number2 + " = " + answer;
        focusAndSelect("#num1");
    }
}

// function to subtract values
function subFunc() {
    const number1 = parseFloat($("#num1").value);
    const number2 = parseFloat($("#num2").value);

    if (isValid(number1, number2)) {
        const answer = number1 - number2;
        document.querySelector("#answer").value = number1 + " - " + number2 + " = " + answer;
        focusAndSelect("#num1");
    }
}


// function to multiply values
function multFunc() {
    const number1 = parseFloat($("#num1").value);
    const number2 = parseFloat($("#num2").value);

    if (isValid(number1, number2)) {
        const answer = number1 * number2;
        document.querySelector("#answer").value = number1 + " x " + number2 + " = " + answer.toFixed(2);
        focusAndSelect("#num1");
    }
}

// function to divide values
function divFunc() {
    const number1 = parseFloat($("#num1").value);
    const number2 = parseFloat($("#num2").value);

    if (isValid(number1, number2)) {
        const answer = number1 / number2;
        document.querySelector("#answer").value =  number1 + " / " + number2 + " = " +answer.toFixed(2);
        focusAndSelect("#num1");
    }
}

//function that clears answer on change of values
function clearAnswer() {
    document.querySelector("#answer").value = "";
}

// Listeners
document.addEventListener("DOMContentLoaded", () => {
    $("#num1").addEventListener("change", clearAnswer);
    $("#num2").addEventListener("change", clearAnswer);
    $("#add").addEventListener("click", addFunc);
    $("#sub").addEventListener("click", subFunc);
    $("#mul").addEventListener("click", multFunc);
    $("#div").addEventListener("click", divFunc);
});