// John Biehl
// 20231005

"use strict"

// removes the duplication of document.querySelector repetition
const $ = selector => document.querySelector(selector);
const getErrorMsg = lbl => `${lbl} entry must be a valid number`;
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
}
const validate = (slices, fries, drinks) => {
    return !isNaN(slices) && !isNaN(fries) && !isNaN(drinks);
};
function setDefaults(){
    $("#slices").value = 3;
    $("#fries").value = 1;
    $("#drinks").value = 2;
};
function clearResults() {
    $("#pq").innerHTML = "-";
    $("#fq").innerHTML = "-";
    $("#dq").innerHTML = "-";

    $("#pp").innerHTML = "-";
    $("#fp").innerHTML = "-";
    $("#dp").innerHTML = "-";
    $("#total").innerHTML = "-";
};

$("#slices").addEventListener("input", clearResults);
$("#fries").addEventListener("input", clearResults);
$("#drinks").addEventListener("input", clearResults);

$("#compute").addEventListener("click", () => {
    const s = parseFloat($("#slices").value);
    const f = parseFloat($("#fries").value);
    const d = parseFloat($("#drinks").value);

    if (validate(s, f, d)) {
        $("#pq").innerHTML = s;
        $("#fq").innerHTML = f;
        $("#dq").innerHTML = d;

        $("#pp").innerHTML = "$" + (s * 1.75).toFixed(2);
        $("#fp").innerHTML = "$" + (f * 2).toFixed(2);
        $("#dp").innerHTML = "$" + (d * 1.25).toFixed(2);

        const total = (s * 1.75) + (f * 2) + (d * 1.25);
        $("#total").innerHTML = "$" + total.toFixed(2);
    }
    focusAndSelect("#slices");
});

$("#clear").addEventListener("click", () => {
    // setDefaults();
    // clearResults();
    // focusAndSelect("#slices");
    location.reload();
});

focusAndSelect("#slices");
