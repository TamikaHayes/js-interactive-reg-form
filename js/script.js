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
const nameInput = document.getElementById("name");
//console.log(nameInput);
nameInput.focus();

//hide "other job role" text field
const otherJobRoleInput = document.getElementById("other-job-role");
//console.log(otherJobRoleInput);
otherJobRoleInput.style.display = "none";

//add event listener to job role drop-down menu; display text field if user selects "Other"