const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //verificar se o nome foi preenchido
  if (nameInput.value === "") {
    alert("Por favor, preencha o campo nome.");
    return;
  }
  //verificar se o email foi preenchido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o campo e-mail.");
    return;
  }
  //verificar se a senha foi preenchida
  if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha deve ter pelo menos 8 dígitos.");
    return;
  }
  //se todos os campos estiverem preenchidos, enviar o formulário
  form.submit();
})

function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)){
    return true;
  }
  return false;
}

function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    return true; 
  }
  return false;
}