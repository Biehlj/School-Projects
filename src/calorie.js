// Written by John Biehl on 10/5/2023
// • When an input element changes, clear previous results, validate inputs, and display new results
// if inputs are valid. Only positive numbers are valid.
// • Avoid unnecessary duplication by using a single named function for all three input event
// handlers.
// • Use a function named totalCalories with three parameters (one for each input) to find and
// return the total calories. Call totalCalories from the function that displays the result.

"use strict"

const $ = selector => document.querySelector(selector);
const getErrorMsg = lbl => `${lbl} entry must be a valid number that is above zero`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};
// Listeners
document.addEventListener("DOMContentLoaded", () => {
    $("#carbGrams").addEventListener("input", clearAnswer);
    $("#proteinGrams").addEventListener("input", clearAnswer);
    $("#fatGrams").addEventListener("input", clearAnswer);
    $("#carbGrams").addEventListener("input", totalCalories);
    $("#proteinGrams").addEventListener("input", totalCalories);
    $("#fatGrams").addEventListener("input", totalCalories);
});

// Functions
function clearAnswer() {
    document.querySelector("#totalCalories").value = "";
}

function isValid(n1, n2, n3) {
    let v = false;

    if (isNaN(n1) || n1 < 0) {
        alert(getErrorMsg("Protein"));
        focusAndSelect("#proteinGrams");
    } else if (isNaN(n2) || n2 < 0) {
        alert(getErrorMsg("Carbohydrate"));
        focusAndSelect("#carbGrams");
    } else if (isNaN(n3) || n3 < 0) {
        alert(getErrorMsg("Fat"));
        focusAndSelect("#fatGrams");
    } else {
        v = true;
    }
    return v;
}

function totalCalories() {
    const carbGrams = parseFloat($("#carbGrams").value);
    const proteinGrams = parseFloat($("#proteinGrams").value);
    const fatGrams = parseFloat($("#fatGrams").value);

    if (isValid(proteinGrams, carbGrams, fatGrams)) {
        // const totalProtein = proteinGrams * 4;
        // const totalCarbs = carbGrams * 4;
        // const totalFat = fatGrams * 9;
        // const totalCalories = totalProtein + totalCarbs + totalFat;
        // document.querySelector("#totalCalories").value = totalCalories;
        document.querySelector("#totalCalories").value = (proteinGrams*4)+(carbGrams*4)+(fatGrams*9);
    }
}


