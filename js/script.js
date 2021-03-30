/**
 * Treehouse Techdegree Project 3
 * Interactive Form
 * Tamika Hayes, March 28,2021
 */

/**
 * This project is an interactive registration form that validates user input 
 * for a fictional full stack web development conference.
 */

//prompt user input by setting focus to first text input field, "Name:"
"use strict";

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

//create variables to reference Design <select> element and Color <select> element, and their respective menu options
const shirtDesignMenu = document.querySelector('#design');
const shirtSelectDesignOption = document.querySelectorAll('#design option');
const shirtColorMenu = document.querySelector('#color');
const shirtSelectColorOption = document.querySelectorAll('#color option');

//console.log(shirtDesignMenu);
//console.log(shirtSelectDesignOption);
//console.log(shirtColorMenu);
//console.log(shirtSelectColorOption);

shirtColorMenu.disabled = true;
shirtDesignMenu.addEventListener('change', (e) => {
    shirtColorMenu.disabled = false;
    for (let i = 0; i < shirtSelectColorOption.length; i++) {
        const selectedTheme = e.target.value;
        //console.log(selectedTheme);
        const shirtThemeColors = shirtSelectColorOption[i].getAttribute('data-theme');
        //console.log(shirtThemeColors);
    }
});