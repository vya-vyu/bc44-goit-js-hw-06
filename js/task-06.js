const textInput = document.querySelector('input');

textInput.addEventListener('blur', event => {   
    const text = textInput.value; 
    if (text.length < textInput.dataset.length) { 
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    } else { 
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    }
})


