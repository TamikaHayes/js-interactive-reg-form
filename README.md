# js-interactive-reg-form
This project is an interactive registration form that validates user input for a fictional full stack conference.

If the "submit" button is clicked while any or all of the required user inputs are empty/invalid, the form does not submit, 
keyboard focus directs the user's attention to the error, and a helpful "hint" message is revealed. If a user selects a 
conference activity that takes place during the same day and time as another conference activity, the time-conflicting 
activity is disabled as a registration option.

The form is designed for accessibility, and can be navigated using the "tab" key instead of a mouse.

Additional error message features:

--Event listeners on both the email and name fields yield an error message if field is blank when it loses focus (on blur)

--Real-time email event listener detects incorrect email address formatting (must follow 'username@domain.com')

--Real-time name event listener detects entry of forbidden characters (numbers, puctuation)