// Created by John Biehl

//declare variables
let value; // user input for number to multiply by

//get a number from the user
while (isNaN(value)) {
    if (isNaN(value)) {
        value = parseFloat(prompt("Please enter a number.", "10"));
    }
}

// loop to do calculations up to 0 - 9 value
for (let index = 0; index < 10; index++) {
    document.write("<label>" + (index + 1) + "</label> <label>" + value + "  x  " + index  + "  = </label><label>" + (value *  index ) + "</label><br>");
}


