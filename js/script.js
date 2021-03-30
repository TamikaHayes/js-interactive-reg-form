/**
 * Treehouse Techdegree Project 3
 * Interactive Form
 * Tamika Hayes, March 28,2021
 */

/**
 * This project is an interactive registration form that validates user input 
 * for a fictional full stack web development conference.
 */


/**
 * User Name and Job Role
 */


"use strict";

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
 * T-Shirt Theme/Design and Color 
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
        const selectedTheme = e.target.value;
        const shirtThemeColors = shirtSelectColorOption[i].getAttribute('data-theme');
        //if the user's chosen shirt theme matches the theme of a color in the menu
        if (selectedTheme === shirtThemeColors) {
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