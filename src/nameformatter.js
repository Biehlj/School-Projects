function getName(){
    const firstName = prompt("what is your first name?");
    const midName = prompt("what is your middle name?");
    const lastName = prompt("what is your last name?");
    const salutation = prompt("What is your preferred title (Mr., Mrs., Ms., Dr.,etc.)?")

    document.write("1. ",salutation," ",firstName," ",midName," ",lastName,
    "<br>2. ",firstName," ",midName," ",lastName,
    "<br>3. ",firstName," ", lastName,
    "<br>4. ", lastName,", ",firstName," ", midName, ", ",salutation,
    "<br>5. ", lastName, ", ",firstName," ", midName,
    "<br>6. ", lastName, ", ", firstName);
}
