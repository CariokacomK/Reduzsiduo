document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const endereco = document.getElementById("endereco").value;
        const usarLocalizacao = form.localizacao.checked;
        const termosAceitos = form.termos.checked;

        if (!termosAceitos) {
            alert("Você precisa aceitar os Termos de Uso e Política de Privacidade.");
            return;
        }

        const novoUsuario = {
            nome,
            email,
            senha,
            endereco,
            usarLocalizacao
        };

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const jaExiste = usuarios.some(usuario => usuario.email === email);

        if (jaExiste) {
            alert("Este e-mail já está cadastrado!");
            return;
        }


        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");

        form.reset();
        window.location.href = "login.html";
    });
});
