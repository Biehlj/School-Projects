// John Biehl
// 2 November 2023

"use strict";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const sales = [0, 0, 0, 0, 0, 0, 0];

$(() => {
    const display = () => {
        let sum = 0;
        let result = "<label>Weekday</label><label>Amount</label><hr>";
        for (let d in weekdays) {
            sum += sales[d];
            result += "<label>" + weekdays[d] + "</label><label>$" + sales[d].toFixed(2) + "</label><br>";
        }
        result += "<hr><label>Total</label><label>$"+sum.toFixed(2)+"</label>";
        $("#output").html(result);
    }

    $("#update").click(() => {
        const w = $("#sales").val();
        const a = parseFloat($("#amount").val());
        if (w == "x") {
            alert("Choose a weekday");
        } else if (isNaN(a) || a < 0) {
            alert("Sales ammount must be a positive number")
        } else {
            sales[w] = a;
            display();
        }
    });

    $("#clear").click(() => {
        const w = $("#sales").val();
        if (w == "x") {
            alert("Choose a weekday");
        } else {
            sales[w] = 0;
        }
        display();
    });
    $("#clearAll").click(() => {
        for (let w in weekdays) {
            sales[w] = 0;
        };
        $("#sales").val("x");
        $("#amount").val("5000");
        display();
    });

    display();
});

// $("#output")
// $("#sales")
// $("#amount")
// $("#update")
// $("#clear")