// created by John Biehl

"use strict"

// functions that reduce the repetition of code
const $ = selector => document.querySelector(selector);
// Error Message
const getErrorMsg = lbl => `${lbl} entry must be a valid number`
//Focus and Select field for reentry
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

function clearField(){
    $("#items").value = "";
    displayItems();
    focusAndSelect("#items");
}
function displayItems(){
    $("#itemLabel").textContent = "Enter item #" +(items.length+1);
    let result = "<ol>";
    for (let i in items){
        result += "<li>" + items[i] +"</li>";
    }
    result +="</ol>";
    $("#all").innerHTML = result;
}

const items = [];

// Listeners
document.addEventListener("DOMContentLoaded", () => {
    $("#addItem").addEventListener("click",()=>{
        items.push($("#items").value);
    });
    $("#addItem").addEventListener("click", clearField);
    $("#reset").addEventListener("click",()=>{
        items.length = 0;
        $("#all").value = "";
        focus("#item");
        displayItems();
    });
    displayItems();
});
