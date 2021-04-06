/**
 * Treehouse Techdegree Project 3
 * Interactive Form
 * Tamika Hayes, April 5,2021
 */

/**
 * This project is an interactive registration form that validates user input 
 * for a fictional full stack web development conference. If the "submit" button 
 * is clicked while any or all of the required user inputs are empty/invalid, 
 * the form does not submit, keyboard focus directs the user's attention to the 
 * error, and a helpful "hint" message is revealed.
 * 
 * If a user selects a conference activity that takes place during the same day and time as 
 * another conference activity, the time-conflicting activity is disabled as a registration option.
 * 
 * The form is designed for accessibility, and can be navigated using the "tab" key instead of a mouse.
 * 
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

//event listener for shirt Color and Design menus
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
 * 
 * --Calculate the total cost of selected conference activities, and display that total cost for the user
 * --Prevent the user from registering for time-conflicting conference activities
 */


const activityCheckboxes = document.querySelectorAll('.activities input');
let totalDisplay = document.querySelector('.activities-cost');
let totalCost = 0

document.querySelector('.activities').addEventListener('change', (e) => {
    //provide the cost of the actvity that was just clicked; convert data type from string to number
    const clickedActivityCost = +(e.target.getAttribute('data-cost'));
    if (e.target.checked === true) {
        totalCost = clickedActivityCost + totalCost;
    } else if (e.target.checked === false) {
        totalCost = totalCost - clickedActivityCost;
    }
    totalDisplay.innerHTML = (`Total: $ ${totalCost}`);


    for (let i = 0; i < activityCheckboxes.length; i++) {
        const checkboxTime = activityCheckboxes[i].getAttribute('data-day-and-time');
        const clicked = e.target;
        const clickedTime = e.target.getAttribute('data-day-and-time');
        //if the day/time of the just-clicked checkbox matches the day/time of the checkbox in our current loop iteration,
        //AND the just-clicked checkbox is not the same as the checkbox in our current loop iteration...
        if (clickedTime === checkboxTime && clicked !== activityCheckboxes[i]) {
          // ...then if the just-clicked checkbox is checked, disable the checkbox and parent label for activities with matching day/time
          if (clicked.checked === true) {
            activityCheckboxes[i].disabled = true;
            activityCheckboxes[i].parentElement.classList.add('disabled');
            //else if the just-clicked checkbox is unchecked, enable the checkbox and parent label for activities with matching day/time
            } else {
            activityCheckboxes[i].disabled = false;
            activityCheckboxes[i].parentElement.classList.remove('disabled');
           }   
        }      
      } 
});

/**
 * Payment Info (Credit Card, Bitcoin, PayPal)
 * 
 * --Credit card payment is default option
 * --Hide or display other payment options based on user selection
 */


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
});

/**
 * Form Validation
 * 
 * --Ensure that all required input fields have been completed with valid entries
 */

const form = document.querySelector("form");
const nameElement = document.querySelector("#name");
let nameValue = nameElement.value;
const email = document.querySelector("#email");
let emailValue = email.value;
const activityValid =  document.querySelector("#activities-box");
const creditNum = document.querySelector("#cc-num");
const zipNum = document.querySelector("#zip");
const cvvNum = document.querySelector("#cvv");


//helper function to validate 'Name' field
const nameValidator = () => {
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    //console.log(`Name validation test on "${nameValue}" evaluates to ${nameIsValid}`);
    return nameIsValid;
}

//event listener to detect whether user has left required name field blank
nameElement.addEventListener('blur', (e) => {
    nameValue = nameElement.value;
    if (nameValue === '') {
        nameElement.parentElement.lastElementChild.style.display = "inline";
    }
});

//event listener to evaluate user name input in real time, and detect forbidden characters
nameElement.addEventListener('keyup', (e) => {
    nameValue = nameElement.value;
    nameValidator();
    if (nameValidator() === false) {
        nameElement.parentElement.lastElementChild.innerHTML = "Name field only accepts letter and space characters";
        nameElement.parentElement.lastElementChild.style.display = "inline";    
    }
});

//helper function to validate 'Email Address' field
const emailValidator = () => {
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    //console.log(`Email validation test on "${emailValue}" evaluates to ${emailIsValid}`);
    return emailIsValid;
}

//event listener to detect whether user has left required email field blank
email.addEventListener('blur', (e) => {
    emailValue = email.value;
    if (emailValue === '') {
        email.parentElement.lastElementChild.innerHTML = "Email field cannot be blank";
        email.parentElement.lastElementChild.style.display = "inline";
    }
});

//event listener to evaluate user email input in real time, and detect incorrect formatting
email.addEventListener('keyup', (e) => {
    emailValue = email.value;
    emailValidator();
    if (emailValidator() === false) {
        email.parentElement.lastElementChild.innerHTML = "Email must be formatted as username@domain.com";
        email.parentElement.lastElementChild.style.display = "inline";    
    }
});

//helper function to validate 'Register for Activities' section
const activityValidator = () => {
    const activitySectionIsValid = totalCost > 0;
    //console.log(`Activity section validation test evaluates to ${activitySectionIsValid}`);
    return activitySectionIsValid;
}

//**USED ONLY IF credit card is selected payment method** :3 helper functions to validate credit card number, ZIP, and CVV:
//Regular expression tests for all 3 credit card input fields 
const creditNumValidator = () => {
        let creditNumValue = creditNum.value;
        const creditNumIsValid = /\d{13,16}/i.test(creditNumValue);
        //console.log(`Credit card number validation test on "${creditNumValue}" evaluates to ${creditNumIsValid}`);
        return creditNumIsValid;
    }

const zipNumValidator = () => {
    let zipNumValue = zipNum.value;
    const zipNumIsValid = /\d{5}/i.test(zipNumValue);
    //console.log(`ZIP number validation test on "${zipNumValue}" evaluates to ${zipNumIsValid}`);
    return zipNumIsValid;
}

const cvvNumValidator = () => {
    let cvvNumValue = cvvNum.value;
    const cvvNumIsValid = /\d{3}/i.test(cvvNumValue);
    //console.log(`CVV number validation test on "${cvvNumValue}" evaluates to ${cvvNumIsValid}`);
    return cvvNumIsValid;
}

//add a 'submit' event listener to the <form> element
form.addEventListener('submit', e => {
    //e.preventDefault();
    if (!nameValidator()) {
        e.preventDefault();
        nameInput.parentElement.classList.add('not-valid');
        nameInput.parentElement.classList.remove('valid');
        nameInput.parentElement.lastElementChild.style.display = "inline";
        
    } else {
        nameInput.parentElement.classList.add('valid');
        nameInput.parentElement.classList.remove('not-valid');
        nameInput.parentElement.lastElementChild.style.display = "none";
    }

    if (!emailValidator()) {
        e.preventDefault();
        email.parentElement.classList.add('not-valid');
        email.parentElement.classList.remove('valid');
        email.parentElement.lastElementChild.innerHTML = "Email field cannot be blank";
        email.parentElement.lastElementChild.style.display = "inline";
        
    } else {
        email.parentElement.classList.add('valid');
        email.parentElement.classList.remove('not-valid');
        email.parentElement.lastElementChild.style.display = "none";
    }


    if (!activityValidator()) {
        e.preventDefault();
        activityValid.parentElement.classList.add('not-valid');
        activityValid.parentElement.classList.remove('valid');
        activityValid.parentElement.lastElementChild.style.display = "inline";
        
    } else {
        activityValid.parentElement.classList.add('valid');
        activityValid.parentElement.classList.remove('not-valid');
        activityValid.parentElement.lastElementChild.style.display = "none";
    }
    

    if (selectPaymentOption[1].selected) {
        if (!creditNumValidator()) {
            e.preventDefault();
            creditNum.parentElement.classList.add('not-valid');
            creditNum.parentElement.classList.remove('valid');
            creditNum.parentElement.lastElementChild.style.display = "inline";
        
        } else if (creditNumValidator()) {
            creditNum.parentElement.classList.add('valid');
            creditNum.parentElement.classList.remove('not-valid');
            creditNum.parentElement.lastElementChild.style.display = "none";
        }
    }
    
    
    if (selectPaymentOption[1].selected) {
        if (!zipNumValidator()) {
            e.preventDefault();
            zipNum.parentElement.classList.add('not-valid');
            zipNum.parentElement.classList.remove('valid');
            zipNum.parentElement.lastElementChild.style.display = "inline";
            
        } else if (zipNumValidator()) {
            zipNum.parentElement.classList.add('valid');
            zipNum.parentElement.classList.remove('not-valid');
            zipNum.parentElement.lastElementChild.style.display = "none";
        }
    }

    if (selectPaymentOption[1].selected) {
        if (!cvvNumValidator()) {
            e.preventDefault();
            cvvNum.parentElement.classList.add('not-valid');
            cvvNum.parentElement.classList.remove('valid');
            cvvNum.parentElement.lastElementChild.style.display = "inline";
            
        } else if (cvvNumValidator()) {
            cvvNum.parentElement.classList.add('valid');
            cvvNum.parentElement.classList.remove('not-valid');
            cvvNum.parentElement.lastElementChild.style.display = "none";
        }
    }
    //console.log('Submit handler is functional!');    
});

//Handles keyboard tab index for checkbox parent labels
for (let i = 0; i < activityCheckboxes.length; i++) {
    activityCheckboxes[i].addEventListener('focus', e => activityCheckboxes[i].parentElement.classList.add('focus'));
  
    activityCheckboxes[i].addEventListener('blur', e => {
      const active = document.querySelector('.focus');
      if (active) active.classList.remove('focus');
    })
};
  