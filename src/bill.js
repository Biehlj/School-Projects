// John Biehl
// 20231005

"use strict"

// removes the duplication of document.querySelector repetition
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
    $("#slices").val(3);
    $("#fries").val(3);
    $("#drinks").val(2);
};
function clearResults() {
    $("#pq").html("-");
    $("#fq").html("-");
    $("#dq").html("-");

    $("#pp").html("-");
    $("#fp").html("-");
    $("#dp").html("-");
    $("#total").html("-");
};

$("#slices").on("input", clearResults());
$("#fries").on("input",clearResults());
$("#drinks").on("input",clearResults());

$("#compute").click(() => {
    const s = parseFloat($("#slices").val());
    const f = parseFloat($("#fries").val());
    const d = parseFloat($("#drinks").val());

    if (validate(s, f, d)) {
        $("#pq").html(s);
        $("#fq").html(f);
        $("#dq").html(d);

        $("#pp").html("$" + (s * 1.75).toFixed(2));
        $("#fp").html("$" + (f * 2).toFixed(2));
        $("#dp").html("$" + (d * 1.25).toFixed(2));

        const total = (s * 1.75) + (f * 2) + (d * 1.25);
        $("#total").html("$" + total.toFixed(2));
    }
    focusAndSelect("#slices");
});

$("#clear").click(() => {
    // setDefaults();
    // clearResults();
    // focusAndSelect("#slices");
    location.reload();
});

focusAndSelect("#slices");
