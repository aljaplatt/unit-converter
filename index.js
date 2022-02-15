const meterFeet = document.querySelector(".meterToFeet");
const litersGallons = document.querySelector(".litersToGallons");
const kgPounds = document.querySelector(".kgToPounds");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

//==========================
let newNumber = 20;
let number = 0;
let numBox = document.querySelector(".num-box");
//==========================
const foot = 3.281;
const meter = 0.305;
let calculatedFeet = 0;
let calculatedMeters = 0;
let initialString = `${number} meters = ${calculatedFeet} feet | ${number} feet = ${calculatedMeters} meters`;
//===========================
const gallon = 0.22;
const liter = 4.546;
let calculatedGallons = 0;
let calculatedLiters = 0;
let initialCon = `${number} liters = ${calculatedGallons} gallons | ${number} gallons = ${calculatedLiters} liters`;
//=============================

meterFeet.textContent = initialString;
litersGallons.textContent = initialCon;
kgPounds.textContent = initialCon; // ***************

function length() {
  number = newNumber;
  console.log(number);
  let res = number * meter;
  let conv = number * foot;
  let result = Math.round((res + Number.EPSILON) * 100) / 100;
  let res2 = Math.round((conv + Number.EPSILON) * 100) / 100;
  console.log(result.toFixed(3));
  console.log(res2.toFixed(3));
  calculatedMeters = result;
  calculatedFeet = res2;

  initialString = `${number} meters = ${calculatedFeet} feet | ${number} feet = ${calculatedMeters} meters`;
  meterFeet.textContent = initialString;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
  newNumber = input.value;
  numBox.textContent = input.value;
  console.log(`numbox: ${numBox}`);
  length();
  volume();
});

function volume() {
  number = newNumber;
  let res = number * gallon;
  let conv = number * liter;
  let result = Math.round((res + Number.EPSILON) * 100) / 100;
  let res2 = Math.round((conv + Number.EPSILON) * 100) / 100;
  console.log(result.toFixed(3));
  console.log(res2.toFixed(3));
  calculatedGallons = result;
  calculatedLiters = res2;

  initialCon = `${number} liters = ${calculatedGallons} gallons | ${number} gallons = ${calculatedLiters} liters`;
  litersGallons.textContent = initialCon;
}
