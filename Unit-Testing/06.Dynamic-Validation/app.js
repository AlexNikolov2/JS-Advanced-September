function validate() {
    let regex = /^[a-z]+@[a-z]+\.[a-z]+/;
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', () =>{
        let result = inputElement.value.match(regex);
        if(result === null){
            inputElement.style.borderColor = 'red';
            inputElement.className = 'error';
        }
        else{
            inputElement.value = '';
            inputElement.removeAttribute('class');
        }
    })
    
}