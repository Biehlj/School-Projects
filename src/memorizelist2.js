"use strict";

const items = [];

$(()=>{
    // Reset Button
    $("#reset").click(()=>{
        items.length = 0;
        $("#all").html("");
        $("#itemLabel").text("Enter item #" + (items.length + 1));
    });

    // function to Add items to the list after clicking the Add button
    $("#add").click(()=>{
        items[items.length] = $("#item").val();
        $("#item").val("");
        $("#item").focus();
        $("#itemLabel").text("Enter item #" + (items.length + 1));

        let result="<ol>";
        for (let item of items){
            result += "<li>" + item + "</li>";
        }
        result += "</ol>";
        $("#all").html(result);
    });
    $("#itemLabel").text("Enter item #" + (items.length + 1));
});

