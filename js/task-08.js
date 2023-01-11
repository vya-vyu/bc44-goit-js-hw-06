const form = document.querySelector('.login-form');
const formResult = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
        formData.forEach((value, name) => {
            if (value.length > 4) {
                formResult[name] = value;
            }
            else {
                alert("Всі поля повинні бути заповнені!")
            }
        });
    
    console.log(formResult);
    document.querySelector('.login-form').reset();
    }

