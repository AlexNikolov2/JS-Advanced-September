function validate() {
    // validation for username 3-20 letters and nums
    // password Validation 5-15 symbols(words, nums, _), must match with repeat pass
    // email validation, use ex 6
    //is company - company number between 1000 and 9999

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let companyInfo = document.getElementById('companyInfo');
    let company = document.querySelector('#company:checked').value;
    let companyNumber = document.getElementById('company-number');
    let validElement = document.getElementById('valid')

    let userregex = /[a-zA-Z0-9]{3,20}/gm;
    let passregex = /\w{5,15}/;
    let emailregex = /^[a-z]+@[a-z]+\.[a-z]+/;

    let isUserValid = Boolean;
    let isPassValid = Boolean;
    let isEmailValid = Boolean;
    let isRepValid = Boolean;

    username.addEventListener('change', (event) =>{
        event.preventDefault();
        let result = username.value.match(userregex);
        if(result === null){
            username.style.borderColor = 'red';
            username.className = 'error';
            validElement.style.display = 'none';
        }
        else{
            username.value = '';
            username.style.border = 'none';
            isUserValid = true;
        }
    })
    password.addEventListener('change', (event) =>{
        event.preventDefault();
        let result = password.value.match(passregex);
        if(result === null){
            password.style.borderColor = 'red';
            password.className = 'error';
            validElement.style.display = 'none';
        }
        else{
            password.value = '';
            password.style.border = 'none';
            isPassValid = true;
        }
    })
    confirmPassword.addEventListener('change', (event) => {
        event.preventDefault();
        if(password.value == confirmPassword.value){
            confirmPassword.value = '';
            confirmPassword.style.border = 'none';
            isRepValid = true;
        }
        else{
            confirmPassword.style.borderColor = 'red';
            confirmPassword.className = 'error';
            validElement.style.display = 'none';
        }
    })
    email.addEventListener('change', (event) =>{
        event.preventDefault();
        let result = email.value.match(emailregex);
        if(result === null){
            email.style.borderColor = 'red';
            email.className = 'error';
            validElement.style.display = 'none';
        }
        else{
            email.value = '';
            email.style.border = 'none';
            isEmailValid = true;
        }
    })
    if(company){
        companyInfo.style.display = 'block';
        companyNumber.addEventListener('change', (event) =>{
            event.preventDefault();
            if(companyNumber.value < 1000 && companyNumber.value > 9999){
            companyNumber.style.borderColor = 'red';
            companyNumber.className = 'error';
            validElement.style.display = 'none';
            }
        })
    }
    else{
        companyInfo.style.display = 'none';
    }
}
