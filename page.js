const form = document.getElementById("form")
const first_input = document.getElementById("first-input")
const second_input = document.getElementById("second-input")
const third_input = document.getElementById("third-input")
const error_message = document.getElementById("error-message")

form.addEventListener('submit', (e) => {
    e.preventDefault() //Prevent submit
    let errors = []

    // Eingaben in Zahlen umwandeln
    const firstValue = parseFloat(first_input.value);
    const secondValue = parseFloat(second_input.value);
    const thirdValue = parseFloat(third_input.value);
    
    errors = getSubmitFormErrors(firstValue, secondValue, thirdValue);

    if(errors.length > 0) {
        //If there are any errors
        //e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
    else{
        window.location.href = "https://www.google.com"
    }

})

function getSubmitFormErrors(firstinput, secondinput, thirdinput){
    let errors = []

    if (firstinput !== 2.59 ){
        errors.push('Die erste Eingabe ist falsch')
    }

    if (secondinput !== 0.59){
        errors.push('Die zweite Eingabe ist falsch')
    }

    if(thirdinput !== 2.15){
        errors.push('Die dritte Eingabe ist falsch')
    }

    return errors;

}

const allInputs = [first_input, second_input, third_input]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input .parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})