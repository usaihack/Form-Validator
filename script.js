let nameInput = document.querySelector('.name')
let nameP = document.querySelector('.validName')
let emailInput = document.querySelector('.email')
let emailP = document.querySelector('.validEmail')
let passInput = document.querySelector('.pass')
let passP = document.querySelector('.validPass')
let reEnterPass = document.querySelector('.cpass')
let reEnterPassP = document.querySelector('.matchPass')
let btn = document.getElementById('btn')
let alert  = document.querySelector('.alert')
let alertText = document.getElementById('alertText')
let main = document.querySelector('.form')
let resetbtn = document.getElementById('resetbtn')
let inputContainer = document.querySelector('.inputs')

// Function for valid name
function isValidName(){
    let nameRegex = /^[a-zA-Z\s'-]{5,30}$/i

    if(nameRegex.test(nameInput.value)){
        return true
    }else{
       return false
    }
}

// function for valid email
function isValidEmail(){
    let emailRegex = /^[\w%+.-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/i

    if(emailRegex.test(emailInput.value)){
        return true
    }else{
        return false
    }

}

// function for valid password
function isStrongPassword(){
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&()[\]{}]).{8,}$/

    if(passRegex.test(passInput.value)){
        return true
    }else{
        return false
    }
}


nameInput.addEventListener('input', () => {

    if(nameInput.value.trim() === ''){
        nameP.textContent = ''
        return
    }

    if(isValidName()){
        nameInput.style.border = '2px solid green'
        nameP.textContent = '✔ valid name'
    }else{
        nameInput.style.border = '2px solid red'
        nameP.textContent = '✖ Invalid name'
    }
})

emailInput.addEventListener('input', () => {

    if(emailInput.value.trim() === ''){
        emailP.textContent = ''
        return
    }

    if(isValidEmail()){
        emailInput.style.border = '2px solid green'
        emailP.textContent = '✔ valid email'
    }else{
        emailInput.style.border = '2px solid red'
        emailP.textContent = '✖ Invalid email'
    }
})

passInput.addEventListener('input', () => {

    if(passInput.value.trim() === ''){
        passP.textContent = ''
        return
    }

    if(isStrongPassword()){
        passInput.style.border = '2px solid green'
        passP.textContent = '✔ strong password'
    }else{
        passInput.style.border = '2px solid red'
        passP.textContent = '✖ weak password'
    }
})

reEnterPass.addEventListener('input', () => {

    if(reEnterPass.value.trim() === ''){
        reEnterPassP.textContent = ''
        return
    }

    if(reEnterPass.value === passInput.value){
        reEnterPass.style.border = '2px solid green'
        reEnterPassP.textContent = '✔ password matches'
    }else{
        reEnterPass.style.border = '2px solid red'
        reEnterPassP.textContent = 'password does not matches'
    }
})



btn.addEventListener('click', (e) => {
    e.preventDefault()

    if((isValidName()) && (isValidEmail()) && (isStrongPassword()) && (reEnterPass.value === passInput.value)){
        alert.style.backgroundColor = 'rgba(174, 255, 174, 0.46)'
        alert.style.top = '10px'
        main.classList.add('blur')
        alertText.textContent = '🎉 Registration successful!'
    }else{
        alert.style.backgroundColor = 'rgba(255, 174, 174, 0.461)'
        alert.style.top = '10px'
        main.classList.add('blur')
        alertText.textContent = '⚠️ Please fix the errors before submitting.'
    }
})

resetbtn.addEventListener('click', () => {
    main.classList.remove('blur')
    alert.style.top = '-15%'
})

