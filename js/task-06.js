const inputRef = document.getElementById('validation-input');
const inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (inputRef.value.length === inputLength) {
       inputRef.classList.remove('invalid'); 
       inputRef.classList.add('valid');
        
    } else { 
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
       
    }
}



