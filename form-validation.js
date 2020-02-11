
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input message

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form__control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form__control success';
}

// Validation Email
function isValid(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

    // Loop of checkRequire
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        }else{
            showSuccess(input);
        }        
    })
}
// Check Length
function checkLength(input, min, max){
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} charaters`);
    }else{
        showSuccess(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    // Cistija verzija
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    // Duza verzija

    // if(username.value === ''){
    //      showError(username, 'Username is required');
    // }else{
    //     showSuccess(username);
    // }
    // if(email.value === ''){
    //      showError(email, 'Email is required');
    // }else if(!isValid(email.value)){
    //     showError(email, 'Email is not valid');
    // }
    // else{
    //     showSuccess(email);
    // }
    // if(password.value === ''){
    //      showError(password, 'Password is required');
    // }else{
    //     showSuccess(password);
    // }
    // if(password2.value === ''){
    //      showError(password2, 'Password is required');
    // }else{
    //     showSuccess(password2);
    // }
    
})