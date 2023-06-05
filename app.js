// INPUTS
const dayInp = document.getElementById('day');
const monthInp = document.getElementById('month');
const yearInp = document.getElementById('year');

// OUTPUT
const dayOup = document.getElementById('dd');
const monthOup = document.getElementById('mm');
const yearOup = document.getElementById('yy');

// FORM
const form = document.querySelector('form');
const btn = document.querySelector('button');


// Number of days according to months
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Retrieve date
const date = new Date(); 
let day = date.getDate(); // day of the month 1 - 31
let month = 1 + date.getMonth(); // to get month value 0-11 (+1 to adjust range 1-12)
let year = date.getFullYear(); // to get year in 4 digit value 1000 - 9999


// Input validation function
function validate(){
    const inputs = document.querySelectorAll('input');
    let validator = true; 
    
    // validate input
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value){
            i.style.borderColor = 'red';
            dayInp.parentElement.querySelector('label').style.color = 'red';
            monthInp.parentElement.querySelector('label').style.color = 'red';
            yearInp.parentElement.querySelector('label').style.color = 'red';
            parent.querySelector('alert').innerText = "This field is required.";
            validator = false;
        } else if (dayInp.value > 31 || dayInp.value <= 0){
            dayInp.style.borderColor = 'red';
            dayInp.parentElement.querySelector('label').style.color = 'red';
            dayInp.parentElement.querySelector('alert').innerText = "Must be a valid day";
            validator = false;
        } else if (monthInp.value > 12 || monthInp.value < 0) {
            monthInp.style.borderColor = 'red';
            monthInp.parentElement.querySelector('label').style.color = 'red';
            monthInp.parentElement.querySelector('alert').innerText = "Must be a valid month";
            validator = false;
        } else if (yearInp.value > year || yearInp.value < 0) {
            yearInp.style.borderColor = 'red';
            yearInp.parentElement.querySelector('label').style.color = 'red';
            yearInp.parentElement.querySelector('alert').innerText = "Must be in the past";
            validator = false;
        } else {
            i.style.borderColor = 'purple';
            dayInp.parentElement.querySelector('label').style.color = 'black';
            monthInp.parentElement.querySelector('label').style.color = 'black';
            yearInp.parentElement.querySelector('label').style.color = 'black';
            parent.querySelector('alert').innerText = '';
            validator = true;
        }
    });
    return validator;
}

// Age calculation function
function submitCalc(e){
    e.preventDefault();
    if (validate()){
        if(dayInp.value > day){
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthInp.value > month){
            month = month + 12;
            year = year - 1;
        }

        const d = day - dayInp.value;
        const m = month - monthInp.value;
        const y = year - yearInp.value;

        dayOup.innerHTML = d;
        monthOup.innerHTML = m;
        yearOup.innerHTML = y;
    }
}

form.addEventListener('submit', submitCalc);