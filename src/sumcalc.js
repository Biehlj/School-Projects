// John Biehl
// 19 October 2023

"use strict"
// Array numList to hold numbers
const numList = [];
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
//function to validate
function isValid(num) {
    let v = false;

    if (isNaN(num) || num <= 0) {
        alert(getErrorMsg("Number entered"));
        focusAndSelect("#num");
    } else {
        v = true;
    }
    return v;
}

function clearTotal() {
    $("#total").value = "";
}
//function to add all numbers in array together
function addAll() {
    let total = 0;
    for (let i in numList) {
        total += numList[i];
    }
    return total;
}
// Function addNumber to add numbers to the array
function addNumber() {
    const num = parseFloat($("#num").value);
    if (isValid(num)) {
        numList.push(num);
        let total = "";
        for (let i in numList){
            total += numList[i];
            if (i < numList.length -1){
                total += " + ";
            };
        };
        $("#total").innerHTML = total + " = " + addAll();
        $("#num").value = "";
        focusAndSelect("#num");
    };
}
//Listeners
document.addEventListener("DOMContentLoaded", () => {
    $("#add_num").addEventListener("click", addNumber)
    $("#num").addEventListener("input",clearTotal);
});