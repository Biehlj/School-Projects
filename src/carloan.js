// Car Loan Calculator
// Created by: John Biehl

"use strict";

let loan_amount;
let annual_interest_rate;
let duration;
let schedule;

// get values from user
do {
    loan_amount = parseFloat(prompt("Please enter the loan amount", "18000"));
} while (isNaN(loan_amount) || loan_amount < 0);

do {
    annual_interest_rate = parseFloat(prompt("Please enter the annual interest rate", "5.25"));
} while (isNaN(annual_interest_rate) || annual_interest_rate <= 0 || annual_interest_rate > 100);

do {
    duration = parseFloat(prompt("Please enter the duration of the loan in months", "60"));
} while (isNaN(duration) || duration < 0);

// calculate the monthly payment
const monthly_interest_rate = annual_interest_rate / 1200;
const monthly_payment = loan_amount * (monthly_interest_rate) / (1 - Math.pow((1 + monthly_interest_rate), (-duration)));
const total_interest = duration * monthly_payment - loan_amount;
const grand_total = loan_amount + total_interest;

// display to the user
document.write("<label>Loan Amount: </label> <label></label><label>$" + loan_amount.toFixed(2) + "</label><br>"); // display the loan amount
document.write("<label>Annual Interest Rate: </label><label></label><label>" + annual_interest_rate.toFixed(2) + "</label><br>"); // display the annual interest rate
document.write("<label>Monthly Interest Rate: </label><label></label><label>" + monthly_interest_rate.toFixed(4) + "</label><br>"); // display the monthly
document.write("<label>Duration: </label><label></label><label>" + duration + "</label><br><hr>"); // display the duration
document.write("<label>Monthly Payment: </label><label></label><label>$" + monthly_payment.toFixed(2) + "</label><br>"); // display the monthly payment
document.write("<label>Total Interest: </label><label></label><label>$" + total_interest.toFixed(2) + "</label><br><hr>"); // display the total interest
document.write("Payment Schedule (first 8 months)<br><br>");
document.write("Starting Balance: " + grand_total.toFixed(2) + "<br>");

for (let i = 0; i < 8; i++) {
    //calculate payment
    schedule = monthly_payment * (i + 1);
    document.write("Balance after " + (i+1) + " months: " + (grand_total - schedule).toFixed(2)+"<br>");
};
document.write("<br><hr><br> Payment Schedule last 8 Balances<br><br>");
for(let i=8; i>0; i--){
    schedule = monthly_payment * i;
    document.write("Balance after "+(duration-(i-1))+" months: $"+ (grand_total-(monthly_payment*(duration-(i-1)))).toFixed(2) + "<br>");
};

