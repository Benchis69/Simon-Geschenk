const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const lastname_input = document.getElementById('lastname-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    e.preventDefault() //Prevent Submit
    let errors = []
    

    errors = getLoginFormErrors(firstname_input.value, lastname_input.value)

    if(errors.length > 0){
        // If there are any errors
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
    else{
        window.location.href = "page.html"
    }
    
})

function getLoginFormErrors(firstname, lastname){
    let errors = []

    if(firstname === '' || firstname == null){
        errors.push('Vorname ist notwendig')
    }

    if(lastname === '' || lastname == null){
        errors.push('Nachname ist notwendig')
    }

    if(firstname != 'Simon' || lastname != 'Beneke'){
        errors.push('Vor- oder Nachname inkorrekt')
    }

    return errors;
}

const allInputs = [firstname_input, lastname_input]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})
