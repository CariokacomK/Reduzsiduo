document.addEventListener("DOMContentLoaded", () => {
  const solicitacoes = JSON.parse(localStorage.getItem("solicitacoes")) || [];
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado")) || {};

  document.getElementById("info-nome").textContent = `Nome: ${usuario.nome || "-"}`;
  document.getElementById("info-endereco").textContent = `Endereço: ${usuario.endereco || "-"}`;
  document.getElementById("info-email").textContent = `Email: ${usuario.email || "-"}`;

  const corpoTabela = document.getElementById("tabela-coletas");
  let totalKg = 0;

  solicitacoes.forEach((s, i) => {
    const linha = document.createElement("tr");

    const data = new Date();
    data.setDate(data.getDate() - i * 7);

    linha.innerHTML = `
      <td>${data.toLocaleDateString()}</td>
      <td>${s.tipo.charAt(0).toUpperCase() + s.tipo.slice(1)}</td>
      <td>${s.quantidade || 0} kg</td>
      <td>Concluído</td>
    `;

    corpoTabela.appendChild(linha);
    totalKg += parseFloat(s.quantidade) || 0;
  });

  document.getElementById("kg-total").textContent = `${totalKg} kg`;
  document.getElementById("total-coletas").textContent = solicitacoes.length;
  document.getElementById("co2").textContent = `${(totalKg * 0.25).toFixed(1)} kg`;
  document.getElementById("economia").textContent = `R$ ${(totalKg * 1.70).toFixed(2)}`;
});
