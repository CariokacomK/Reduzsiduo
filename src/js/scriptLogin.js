document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.querySelector("form");

  if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);

      if (usuarioValido) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
        window.location.href = "index.html";
      } else {
        alert("E-mail ou senha inválidos.");
      }
    });
  }
});
