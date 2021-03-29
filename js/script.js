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
nameInput.focus();

//hide "other job role" text field
const otherJobRoleInput = document.getElementById("other-job-role");
otherJobRoleInput.style.display = "none";

//add event listener to job role drop-down menu; display text field if user selects "Other"
const userJobTitle = document.getElementById("title");

userJobTitle.addEventListener('change', function() {
    if (userJobTitle.value === "other") {
        if (otherJobRoleInput.style.display = "none") {
            otherJobRoleInput.style.display = "block";
        } else {
            otherJobRoleInput.style.display = "none";
        }  
    } 
});