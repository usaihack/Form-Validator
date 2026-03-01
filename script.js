let nameInput = document.querySelector('.name');
let nameP = document.querySelector('.validName');
let emailInput = document.querySelector('.email');
let emailP = document.querySelector('.validEmail');
let passInput = document.querySelector('.pass');
let passP = document.querySelector('.validPass');
let reEnterPass = document.querySelector('.cpass');
let reEnterPassP = document.querySelector('.matchPass');
let btn = document.getElementById('btn');
let alertBox  = document.querySelector('.alert');
let alertText = document.getElementById('alertText');
let main = document.querySelector('.form');
let resetbtn = document.getElementById('resetbtn');

const themeColors = {
    valid: '#0f0',
    invalid: '#f00'
};

function isValidName() {
    return /^[a-zA-Z\s'-]{5,30}$/i.test(nameInput.value);
}

function isValidEmail() {
    return /^[\w%+.-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/i.test(emailInput.value);
}

function isStrongPassword() {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&()[\]{}]).{8,}$/.test(passInput.value);
}

nameInput.addEventListener('input', () => {
    if(nameInput.value.trim() === '') {
        nameP.textContent = '';
        nameInput.style.borderBottomColor = '';
        return;
    }
    if(isValidName()) {
        nameInput.style.borderBottomColor = themeColors.valid;
        nameP.style.color = themeColors.valid;
        nameP.textContent = '>> STATUS: OK';
    } else {
        nameInput.style.borderBottomColor = themeColors.invalid;
        nameP.style.color = themeColors.invalid;
        nameP.textContent = '>> ERR: FORMAT_INVALID';
    }
});

emailInput.addEventListener('input', () => {
    if(emailInput.value.trim() === '') {
        emailP.textContent = '';
        emailInput.style.borderBottomColor = '';
        return;
    }
    if(isValidEmail()) {
        emailInput.style.borderBottomColor = themeColors.valid;
        emailP.style.color = themeColors.valid;
        emailP.textContent = '>> STATUS: VERIFIED';
    } else {
        emailInput.style.borderBottomColor = themeColors.invalid;
        emailP.style.color = themeColors.invalid;
        emailP.textContent = '>> ERR: UNKNOWN_NODE';
    }
});

passInput.addEventListener('input', () => {
    if(passInput.value.trim() === '') {
        passP.textContent = '';
        passInput.style.borderBottomColor = '';
        return;
    }
    if(isStrongPassword()) {
        passInput.style.borderBottomColor = themeColors.valid;
        passP.style.color = themeColors.valid;
        passP.textContent = '>> ENCRYPTION: SECURE';
    } else {
        passInput.style.borderBottomColor = themeColors.invalid;
        passP.style.color = themeColors.invalid;
        passP.textContent = '>> ERR: WEAK_KEY';
    }
});

reEnterPass.addEventListener('input', () => {
    if(reEnterPass.value.trim() === '') {
        reEnterPassP.textContent = '';
        reEnterPass.style.borderBottomColor = '';
        return;
    }
    if(reEnterPass.value === passInput.value) {
        reEnterPass.style.borderBottomColor = themeColors.valid;
        reEnterPassP.style.color = themeColors.valid;
        reEnterPassP.textContent = '>> HASH_MATCH: TRUE';
    } else {
        reEnterPass.style.borderBottomColor = themeColors.invalid;
        reEnterPassP.style.color = themeColors.invalid;
        reEnterPassP.textContent = '>> ERR: MISMATCH';
    }
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(isValidName() && isValidEmail() && isStrongPassword() && reEnterPass.value === passInput.value) {
        alertBox.className = 'alert success';
        alertBox.style.top = '20px';
        alertText.textContent = '>> SYS_OVERRIDE_SUCCESSFUL. ACCESS_GRANTED.';
        main.classList.add('blur');
    } else {
        alertBox.className = 'alert';
        alertBox.style.top = '20px';
        alertText.textContent = '>> ACCESS_DENIED. RESOLVE_ERRORS.';
        main.classList.add('blur');
    }
});

resetbtn.addEventListener('click', () => {
    main.classList.remove('blur');
    alertBox.style.top = '-100%';
});
