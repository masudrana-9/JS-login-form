# My Project Name
User Login Form

## Overview
This is a Login Form. i use HTML, CSS & JS for this project.


## Challenges Faced During Development
During the development of this project, I encountered and resolved several challenges. Below are the key issues I faced and the lessons I learned:

1. **Resetting Previous State**
One challenge was ensuring that error states were cleared before starting new validation. I needed to reset all previous error messages and styles before running validations on form fields. This was important to prevent old errors from lingering when the user submits the form again.

Solution:
I implemented a resetErrors() function that loops through all form elements and removes any error classes and messages, ensuring a fresh validation process on each form submission.

2. **Skipping the Submit Button from Validation**
By default, the submit button is included in the form's inputs when looping through them for validation. However, I did not want to validate the submit button itself, as it's not an input field that requires validation.

Solution:
I added a check to skip the validation of the submit button by using if (input.type === 'submit') return true; within the validation loop. This ensures that only relevant input fields are validated.

3. **Using a Boolean Variable (isValid) for Validation Result**
I needed a way to track whether the entire form passed validation or not. Initially, this was a bit tricky as the validation process involves multiple inputs, and I had to ensure that the form is only submitted if all fields are valid.

Solution:
I introduced an isValid variable, which starts as true and gets set to false if any validation fails. If isValid remains true after all validations, the form is considered valid and can be submitted.

4. **Performing Email Validation Only on the Email Field**
Another challenge was to ensure that email validation was only performed for the email input field. I initially faced issues with email validation being triggered unnecessarily for other fields in the form.

Solution:
I added a conditional check in the validation function to ensure that email validation is only performed on the field with the name "email". This way, email-specific validation logic is only executed when the email input is being validated.

5. **Breaking Down Functions for Reusability (Function Decomposition)**
One of the key lessons I learned during this project was the importance of breaking down complex logic into smaller, reusable functions. Initially, my code was becoming harder to manage, especially when dealing with form validations and error handling.

Solution:
I refactored my code into smaller, more manageable functions, each with a clear responsibility. Functions like setError(), formatMessage(), and emailValidation() were created to handle specific tasks. This approach not only made my code more organized but also made it easier to maintain and extend in the future.
