const textInput = document.querySelector('input');

textInput.addEventListener('blur', event => {   
    const text = textInput.value; 
    if (text.length === Number(textInput.dataset.length)) { 
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else { 
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
})


