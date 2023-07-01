const form = document.querySelector('.login-form');
const inputs = document.querySelector('input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      return alert("Fill in all the fields!");
    }
  
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }
