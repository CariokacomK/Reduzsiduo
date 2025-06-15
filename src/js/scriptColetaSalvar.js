document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const solicitacao = {
            nome: document.getElementById("nome").value,
            endereco: document.getElementById("endereco").value,
            tipo: document.getElementById("tipo").value,
            quantidade: document.getElementById("quantidade").value,
            observacoes: document.getElementById("observacoes").value
        };

        const solicitacoesExistentes = JSON.parse(localStorage.getItem("solicitacoes")) || [];
        solicitacoesExistentes.push(solicitacao);
        localStorage.setItem("solicitacoes", JSON.stringify(solicitacoesExistentes));

        alert("Solicitação salva com sucesso!");
        form.reset();
    });
});