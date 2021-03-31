/**
 * Treehouse Techdegree Project 3
 * Interactive Form
 * Tamika Hayes, March 28,2021
 */

/**
 * This project is an interactive registration form that validates user input 
 * for a fictional full stack web development conference.
 */

 "use strict";

/**
 * Basic Info (User Name and Job Role) 
 */


//prompt user input by setting focus to first text input field, "Name:"
const nameInput = document.getElementById("name");
nameInput.focus();

//hide "other job role" text field
const otherJobRoleInput = document.getElementById("other-job-role");
otherJobRoleInput.style.display = "none";

//add event listener to job role drop-down menu; display text field if user selects "Other"
const userJobTitle = document.getElementById("title");

userJobTitle.addEventListener('change', (e) => {
    if (e.target.value === "other") {
        otherJobRoleInput.style.display = "block";
    } else {
        otherJobRoleInput.style.display = "none";
        }  
});


/**
 * T-Shirt Info (Design and Color)
 */

//create variables to reference Design <select> element and Color <select> element, and their respective menu options
const shirtDesignMenu = document.querySelector('#design');
const shirtSelectDesignOption = document.querySelectorAll('#design option');
const shirtColorMenu = document.querySelector('#color');
const shirtSelectColorOption = document.querySelectorAll('#color option');

shirtColorMenu.disabled = true;
shirtDesignMenu.addEventListener('change', (e) => {
    shirtColorMenu.disabled = false;
    for (let i = 0; i < shirtSelectColorOption.length; i++) {
        const clickedTheme = e.target.value;
        const shirtColorTheme = shirtSelectColorOption[i].getAttribute('data-theme');
        //if the user's chosen shirt theme matches the theme of a shirt color in the menu
        if (clickedTheme === shirtColorTheme) {
            //display the available shirt colors that DO match the chosen theme
            shirtSelectColorOption[i].hidden = false;
            shirtSelectColorOption[i].setAttribute("selected", "selected");
        } else {
            //hide the available shirt colors that DO NOT match the chosen theme
            shirtSelectColorOption[i].hidden = true;
            shirtSelectColorOption[i].removeAttribute("selected", "selected");
        } 
    }
});

/**
 * Register for Activities
 */
//calculate the total cost of selected conference activities, and display that total cost for the user

const activityCheckboxes = document.querySelectorAll('.activities input');
//console.log(activityCheckboxes);
let totalDisplay = document.querySelector('.activities-cost');
//console.log(totalDisplay);
let totalCost = 0

document.querySelector('.activities').addEventListener('change', (e) => {
    //provide the cost of the actvity that was just clicked; convert data type from string to number
    const clickedActivityCost = +(e.target.getAttribute('data-cost'));
    //console.log(clickedActivityCost);
    //console.log(typeof clickedActivityCost);
    if (e.target.checked === true) {
        totalCost = clickedActivityCost + totalCost;
    } else if (e.target.checked === false) {
        totalCost = totalCost - clickedActivityCost;
    }
    //console.log(totalCost);
    //console.log(e.target.checked);
    totalDisplay.innerHTML = (`Total: $ ${totalCost}`);
});

/**
 * Payment Info (Credit Card, Bitcoin, PayPal)
 */

//hide or display other payment options based on user selection
const paymentMenu = document.querySelector('#payment');
const selectPaymentOption = document.querySelectorAll('#payment option');
const creditCardInfo = document.querySelector('#credit-card');
const paypalInfo = document.querySelector('#paypal');
const bitcoinInfo = document.querySelector('#bitcoin');

//set credit card as default payment option on page load
selectPaymentOption[1].setAttribute("selected", "selected");
//hide bitcoin and paypal payment info <p> on page load
paypalInfo.hidden = true;
bitcoinInfo.hidden = true;

paymentMenu.addEventListener('change', (e) => {
    for (let i = 0; i < selectPaymentOption.length; i++) {
         const clickedPayment = e.target.value;
        //if the user's chosen payment method matches the value of index [2] in the array of payment options
        if (clickedPayment == selectPaymentOption[2].value) {
            //display paypal payment info; hide other payment info
            paypalInfo.hidden = false;
            creditCardInfo.hidden = true;
            bitcoinInfo.hidden = true;
        //else if the user's chosen payment method matches the value of index [3] in the array of payment options
        } else if (clickedPayment == selectPaymentOption[3].value) {
            //display bitcoin payment info; hide other payment info
            bitcoinInfo.hidden = false;
            creditCardInfo.hidden = true;
            paypalInfo.hidden = true;
        //else return to default payment option (credit card, the value at index[1])
         } else {
             creditCardInfo.hidden = false;
             paypalInfo.hidden = true;
             bitcoinInfo.hidden = true;
         }
     }
});