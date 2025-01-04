
function formSubmit() {
    const loginForm = document.getElementById('login-form')
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault()

        //Get All inputs Element with convering HTMLCollection to Array
        let inputs = [...this.elements]

        //Reset previous error state
        resetErrors(inputs)

        let isFormValid = true
        let data = {}

        inputs.forEach(input => {
            if (input.type === 'submit') return true; // Skip the submit button

            if(!validation(input)) {
                isFormValid = false
            } else {
                data[input.name] = input.value
            }
        })

        if(isFormValid) {
            console.log(data)
        }
    })
}

formSubmit()

function validation(input) {
    let isValid = true
  
    if(input.value.trim() === '') {
        setError(input, `${formatMessage(input.name)} Must Not Be Empty!` )
        isValid = false

    } else if(input.name ==='email' && input.value !=='' && !emailValidation(input.value)){
        setError(input, 'Please Provide a Valid Email!')
        isValid = false

    } else if(input.name === 'password' && input.value !==''){
        let errMessage = passwordValidation(input.value)
        if (errMessage) {
            setError(input, errMessage);
            isValid = false; 
        }
    }

    return isValid

}

function formatMessage(str) {
    return str.charAt().toUpperCase()+str.slice(1)
}

function passwordValidation(password) {
    if(password.length < 6) {
        return 'Password Must Not be Less then 6 Characters'
    } else if(password.length > 20) {
        return 'Password Must Not be More then 20 Characters'
    } 

    return null
}

function emailValidation(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function setError(input, message) {
    let parent = input.parentNode
    parent.classList.add('error')
    let smallText = parent.querySelector('small')
    smallText.textContent = message
}

function resetErrors(inputs) {
    inputs.forEach(input => {
        let parent = input.parentNode
        parent.classList.remove('error')
        let smallText = parent.querySelector('small')
        smallText.textContent = ''
    })
}

