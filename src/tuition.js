// Tuition Calculator by John Biehl

"use strict"
let tuition = 0;

do {
   tuition = parseFloat(prompt("Please enter a tuition rate between $100 and $200:"));
}while(isNaN(tuition) || tuition < 100 || tuition > 200);

document.write(" At $"+ tuition.toFixed(2)+" per credit, the cost per </br>")
document.write("semester of: </br>")
for (let index = 3; index <= 18; index = index + 3) {
    let tuitionRate = tuition * index;
    document.write(index+" credits is $"+tuitionRate.toFixed(2)+"</br>");
};
