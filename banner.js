document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards-banner");

    const banners = [
        {
            imagen: "IMGOFERTAS/oferta banner.jpg",
            enlace: "ofertas.html",
            alt: "Oferta destacada"
        },
        // Podés seguir agregando más banners aquí
    ];

    banners.forEach(({ imagen, enlace, alt }) => {
        const link = document.createElement("a");
        link.href = enlace;
        link.className = "card-banner";

        const img = document.createElement("img");
        img.src = imagen;
        img.alt = alt;
        img.className = "card-img";

        link.appendChild(img);
        container.appendChild(link);
    });
});