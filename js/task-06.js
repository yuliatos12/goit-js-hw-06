const inputRef = document.getElementById('validation-input');
const inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const enteredValue = inputRef.value.trim();
  const valueLength = enteredValue.length;
    if (valueLength === inputLength) {
       inputRef.classList.remove('invalid'); 
       inputRef.classList.add('valid');
        
    } else { 
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
       
    }
}



