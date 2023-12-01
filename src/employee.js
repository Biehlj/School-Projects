// John Biehl
// 20 November 2023

// This program creates an Employee class with name, department, and monthly salary properties and methods to return annual salary and raise salary by 10%.

"use strict";
const us = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// Employee class
class Employee {
  constructor(name, department, montlySalary) {
    this.name = name;
    this.department = department;
    this.montlySalary = montlySalary;
  }
  // Getters
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get montlySalary() {
    return this._montlySalary;
  }
  // Setters
  set name(value) {
    this._name = value;
  }
  set department(value) {
    this._department = value;
  }
  set montlySalary(value) {
    this._montlySalary = value;
  }
  // Method to return annual salary
  annualSalary() {
    return this.montlySalary * 12;
  }
  // Method to return a raise of 10%
  raise() {
    this.montlySalary *= 1.1;
  }
}

// Create an array of employees
let employees = [
  new Employee("John Biehl", "IT", 5500),
  new Employee("Jane Biehl", "HR", 4000),
  new Employee("Jane Doe", "Legal", 6000),
  new Employee("John Doe", "Finance", 5000),
  new Employee("John Smith", "Operations", 3000),
  new Employee("Jane Smith", "Acquisitions", 6500),
];

// Display employees with annual salary
function displayEmployees() {
  let output =
    "<label><span> Employees </span></label><label><span> Annual Salary</span></label><hr>";
    let accumulator = 0;
  for (let employee of employees) {
    output += `<label>${employee.name}</label><label>${us.format(
      employee.annualSalary()
    )}</label><br>`;
    accumulator += employee.annualSalary();
  }
  output +=
    "<hr><label><span> Total Annual Salary</span></label><label>" +
    us.format(accumulator) +
    "</label><br>";
  document.getElementById("output").innerHTML = output;
}

$(document).ready(() => {
  // Set initial employee index to 0
  let index = 0;

  // Set input values to the first employee in the array
  $("#name").val(employees[index].name);
  $("#dept").val(employees[index].department);
  $("#month").val(us.format(employees[index].montlySalary));

  // first button click event handler goes to first employee in array
  $("#first").click(() => {
    index = 0;
    $("#name").val(employees[0].name);
    $("#dept").val(employees[0].department);
    $("#month").val(us.format(employees[index].montlySalary));
  });

  // last button click event handler goes to last employee in array
  $("#last").click(() => {
    index = employees.length - 1;
    $("#name").val(employees[employees.length - 1].name);
    $("#dept").val(employees[employees.length - 1].department);
    $("#month").val(us.format(employees[index].montlySalary));
  });

  // next button click event handler goes to next employee in array
  $("#next").click(() => {
    if (index < employees.length - 1) {
      index++;
      $("#name").val(employees[index].name);
      $("#dept").val(employees[index].department);
      $("#month").val(us.format(employees[index].montlySalary));
    }
  });

  // previous button click event handler goes to previous employee in array
  $("#previous").click(() => {
    if (index > 0) {
      index--;
      $("#name").val(employees[index].name);
      $("#dept").val(employees[index].department);
      $("#month").val(us.format(employees[index].montlySalary));
    }
  });

  // raise button click event handler raises current employee's salary
  $("#raise").click(() => {
    employees[index].raise();
    $("#month").val(us.format(employees[index].montlySalary));
    displayEmployees();
  });

  // displays all employees in output div
  displayEmployees();
});
