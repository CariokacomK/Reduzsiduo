document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById("map");

    if (!mapContainer) return;

    const map = L.map("map").setView([-23.420999, -51.933056], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    const pontos = [
        {
            coords: [-23.4205, -51.9330],
            nome: "EcoPonto Zona 1",
            endereco: "Rua Sustentável, 100",
            tipos: ["organico", "reciclavel"],
        },
        {
            coords: [-23.4280, -51.9300],
            nome: "Recicla Maringá",
            endereco: "Av. Verde, 200",
            tipos: ["reciclavel", "eletronico"],
        },
        {
            coords: [-23.4250, -51.9400],
            nome: "Central Ecológica",
            endereco: "Rua Limpa, 300",
            tipos: ["organico", "reciclavel", "eletronico"],
        },
        {
            coords: [-23.4295, -51.9450],
            nome: "Ponto Verde Mandacaru",
            endereco: "Av. Mandacaru, 500",
            tipos: ["organico"],
        },
        {
            coords: [-23.4167, -51.9205],
            nome: "Coleta Zona Norte",
            endereco: "Rua Floresta, 888",
            tipos: ["reciclavel"],
        },
        {
            coords: [-23.4123, -51.9289],
            nome: "Estação Sustentável",
            endereco: "Av. Brasil, 3000",
            tipos: ["eletronico"],
        },
        {
            coords: [-23.4305, -51.9250],
            nome: "Recicla Fácil",
            endereco: "Rua Circular, 270",
            tipos: ["organico", "reciclavel"],
        },
        {
            coords: [-23.4225, -51.9185],
            nome: "EcoMar Pioneiros",
            endereco: "Av. Pioneiro, 1221",
            tipos: ["reciclavel", "eletronico"],
        }
    ];


    const marcadores = [];

    pontos.forEach((ponto) => {
        const marker = L.marker(ponto.coords)
            .bindPopup(`<strong>${ponto.nome}</strong><br>${ponto.endereco}<br><em>${ponto.tipos.join(", ")}</em>`)
            .addTo(map);
        marker._tipos = ponto.tipos;
        marcadores.push(marker);
    });

    const checkboxes = document.querySelectorAll('input[name="residuo"]');
    checkboxes.forEach((checkbox) =>
        checkbox.addEventListener("change", aplicarFiltro)
    );

    function aplicarFiltro() {
        const tiposSelecionados = Array.from(checkboxes)
            .filter((cb) => cb.checked)
            .map((cb) => cb.value);

        marcadores.forEach((marker) => {
            const visivel = marker._tipos.some((tipo) =>
                tiposSelecionados.includes(tipo)
            );
            if (visivel) {
                marker.addTo(map);
            } else {
                map.removeLayer(marker);
            }
        });
    }

    aplicarFiltro();
});
