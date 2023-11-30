// created by John Biehl
// 26 October 2023

"use strict"

const acctnums = ["S1234", "S2345", "C1234", "C2345", "z4321"];



$(() => {
    $("#validate").click(() => {
        let found = false;
        const acctsfound = [];
        const target = $("#acctnum").val();
        for (var n of acctnums) {
            if (n.toUpperCase().includes(target.toUpperCase())) {
                found = true;
                acctsfound[acctsfound.length] = n;
            };
        };
        if (found == true) {
            let result = "<ol>";
            for (let a in acctsfound){
                result += "<li>" + acctsfound[a]+"</li>";
            }
            result +="</ol>"
            $("#acctsfound").html(result);
        }else{
            alert(target + " Not Found");
        };
    });
});