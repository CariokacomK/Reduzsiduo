document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("entrarBtn");
    const linkImpacto = document.getElementById("impactoLink");
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const btnCadastro = document.getElementById("btnCadastro")


    if (usuarioLogado) {
        btnLogin.textContent = "Sair";
        btnLogin.onclick = () => {
            localStorage.removeItem("usuarioLogado");
            window.location.reload();
        };
        linkImpacto.style.display = "inline";

        if (btnCadastro) btnCadastro.style.display = "none";

    } else {
        btnLogin.textContent = "Entrar";
        btnLogin.onclick = () => {
            window.location.href = "login.html";
        };
        linkImpacto.style.display = "none";

        if (btnCadastro) btnCadastro.style.display = "inline-block";
    }


    const linksPrivados = document.querySelectorAll('a[data-requer-login="true"]');
    console.log(linksPrivados);

    linksPrivados.forEach(link => {
        link.addEventListener("click", (e) => {
            if (!usuarioLogado) {
                e.preventDefault();
                alert("Você precisa estar logado para acessar esta funcionalidade.");
                window.location.href = "login.html";
            }
        });
    });
});
