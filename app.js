// inputs
const daysInput = document.getElementById("day");
const monthsInput = document.getElementById("month");
const yearsInput = document.getElementById("year");

// outputs
const dayOutput = document.getElementById("days");
const monthOutput = document.getElementById("months");
const yearOutput = document.getElementById("years");

// form
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// newDate
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerHTML = "This field is required!";
      validator = false;
    } else if (monthsInput.value > 12) {
      monthsInput.style.borderColor = "red";
      monthsInput.parentElement.querySelector("small").innerHTML =
        "Must be a valid month!";
      validator = false;
    } else if (daysInput.value > 31) {
      daysInput.style.borderColor = "red";
      daysInput.parentElement.querySelector("small").innerHTML =
        "Must be a valid day!";
      validator = false;
    } else if (yearsInput.value > year) {
      yearsInput.style.borderColor = "red";
      yearsInput.parentElement.querySelector("small").innerHTML =
        "Must be a year from the past!";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerHTML = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (daysInput.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthsInput.value > month) {
      month = month + 12;
    }
    const d = day - daysInput.value;
    const m = month - monthsInput.value;
    const y = year - yearsInput.value;

    dayOutput.innerHTML = d;
    monthOutput.innerHTML = m;
    yearOutput.innerHTML = y;
  }
}
