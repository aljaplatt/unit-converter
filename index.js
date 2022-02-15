const meterFeet = document.querySelector(".meterToFeet");
const litersGallons = document.querySelector(".litersToGallons");
const kgPounds = document.querySelector(".kgToPounds");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

//==========================
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
const kg = 0.454;
const pound = 2.204;
let calculatedKgs = 0;
let calculatedPounds = 0;
let initCon = `${number} kilos = ${calculatedPounds} pounds | ${number} pounds = ${calculatedKgs} kilos`;
//=============================

meterFeet.textContent = initialString;
litersGallons.textContent = initialCon;
kgPounds.textContent = initCon; // ***************

function length() {
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
function volume() {
  let res = number * gallon;
  let conv = number * liter;
  let result = Math.round((res + Number.EPSILON) * 100) / 100;
  let res2 = Math.round((conv + Number.EPSILON) * 100) / 100;
  calculatedGallons = result;
  calculatedLiters = res2;

  initialCon = `${number} liters = ${calculatedGallons} gallons | ${number} gallons = ${calculatedLiters} liters`;
  litersGallons.textContent = initialCon;
}

function weight() {
  let res = number * pound;
  let conv = number * kg;
  let result = Math.round((res + Number.EPSILON) * 100) / 100;
  let res2 = Math.round((conv + Number.EPSILON) * 100) / 100;
  calculatedPounds = result;
  calculatedKgs = res2;

  initCon = `${number} kilos = ${calculatedPounds} pounds | ${number} pounds = ${calculatedKgs} kilos`;
  kgPounds.textContent = initCon;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
  number = input.value;
  numBox.textContent = input.value;
  console.log(`numbox: ${numBox}`);
  length();
  volume();
  weight();
});
