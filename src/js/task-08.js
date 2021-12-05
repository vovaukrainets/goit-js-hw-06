const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  
  const infoToLog = { 
      email: email.value,
      password: password.value
  };

  console.log(infoToLog);
  event.currentTarget.reset();
}
