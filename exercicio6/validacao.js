const email = document.getElementById("email");
const senha = document.getElementById("senha");
const emailE = document.getElementById("emailE");
const senhaE = document.getElementById("senhaE");
const form = document.getElementById("form");

function validarEmail() {
  if(!email.value.includes("@")){
    emailE.textContent = "Email deve conter @";
  } else {
    emailE.textContent = "";
  }
}

function validarSenha() {
  if(senha.value.length < 6){
    senhaE.textContent = "Senha deve conter no mínimo 6 caracteres";
  } else {
    senhaE.textContent = "";
  }
}

email.addEventListener("blur", validarEmail);
email.addEventListener("input", validarEmail);

senha.addEventListener("blur", validarSenha);
senha.addEventListener("input", validarSenha);

form.addEventListener("submit", (e) => {
  validarEmail();
  validarSenha();
  if(emailE.textContent || senhaE.textContent){
    e.preventDefault();
  }
});