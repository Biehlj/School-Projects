// John Biehl
// 9 November 2023

"use strict"

const student = [];
const scores = [];

// ready method
$(() => {

    // display to screen
    const display = () => {
        let sum = 0.0;
        let result = "<label>Student</label><label>Score</label><hr>";
        for (let i in student) {
            result += "<label>" + student[i] + "</label><label>" + scores[i] + "</label>";
            sum += scores[i];
        }
        // prevents NaN when array is empty
        let average = 0;
        if (sum <= 0) {
            average = 0;
        } else {
            average = sum / scores.length;
        }
        result += "<hr><Label>Average</label><label>" + average.toFixed(2) + "</label>";
        $("#output").html(result);
        $("#student").focus();
    }

    // new score entry
    $("#enter").click(() => {
        const s = $("#student").val();
        const sc = parseFloat($("#score").val());
        
        // input validation
        if (s == "") {
            alert("Enter a Student name");
            $("#student").focus();
        } else if (isNaN(sc) || sc < 0 || sc > 100) {
            alert("Score must be a number between 0 and 100");
            $("#score").focus();
            $("#score").select();
        } else {
            // adds values to arrays and clears entries
            student[student.length] = s
            scores[scores.length] = sc
            $("#student").val("");
            $("#score").val("");
            display();
        }
    });

    // clear fields
    $("#clear").click(() => {
        student.length = 0;
        scores.length = 0;
        $("#output").html("");
        display();
    });

    display();

});