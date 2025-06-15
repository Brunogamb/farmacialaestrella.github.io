const ofertas = [
    {
        precio: "$5.184 C/U",
        nombre: "Capilatis Shampoo y Acondicionador Ortiga Concentrado x420ml",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (1).jpg"
    },
    {
        precio: "$4.779 C/U",
        nombre: "Old Spice Desodorante Leña x50g",
        descripcion: "35% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (2).jpg"
    },
    {
        precio: "$3.694 C/U",
        nombre: "Jonson's Shampoo y Acondicionador Ortiga Concentrado x420ml",
        descripcion: "30% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (3).jpg"
    },
    {
        precio: "$1.104 C/U",
        nombre: "Espadol Dettol Jabón Active Deo 80g",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (4).jpg"
    },
    {
        precio: "$13.839 C/U",
        nombre: "Aveno Shampoo y Acondicionador Restaurador Capilar x250ml",
        descripcion: "35% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (5).jpg"
    },
    {
        precio: "$5.409",
        nombre: "Gillette Cartuchos Para Afeitar Mach3 x2",
        descripcion: "20% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (6).jpg"
    },
    {
        precio: "$5.829 C/U",
        nombre: "Gillette Desodorante Cool Wave x93gr",
        descripcion: "35% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (7).jpg"
    },
    {
        precio: "$2.694 C/U",
        nombre: "Rexona Antitranspirante Hombre/ V8/Invis./ Xtracool En Aerosol x150ml",
        descripcion: "30% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (8).jpg"
    },
    {
        precio: "$3.694 C/U",
        nombre: "Rexona Antitransp. Mujer Cotton Dry/Bamb/Antibac/Active M./Nutritive En Aerosol x150ml",
        descripcion: "30% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (9).jpg"
    },
    {
        precio: "$3.874 C/U",
        nombre: "Dove Antitranspirante Original En Barra X50gr",
        descripcion: "30% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (10).jpg"
    },
    {
        precio: "$2.759 C/U",
        nombre: "Colgate Cepillo Sensitive Pro Alivio Suave x1u",
        descripcion: "35% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (11).jpg"
    },
    {
        precio: "$3.564 C/U",
        nombre: "Alta Moda Mascara Capilar Super Olis x300ml",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (12).jpg"
    },
    {
        precio: "$1.114 C/U / 1.399 C/U",
        nombre: "Lady Soft Toallas Femenina Normal/Ultradelgada Tela Suave Con Alas x8u",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (13).jpg"
    },
    {
        precio: "$4.289 C/U",
        nombre: "Veet Banda Depilatoria Piel Sensible x16u",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (14).jpg"
    },
    {
        precio: "$4.459 C/U",
        nombre: "Oral B Crema Dental Detox Sensible x75ml",
        descripcion: "50% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (15).jpg"
    },
];

window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards-container");

    ofertas.forEach(oferta => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${oferta.imagen}" alt="${oferta.nombre}" class="card-img" loading="lazy">
            <div class="card-content">
                <h3>${oferta.precio}</h3>
                <h3>${oferta.nombre}</h3>
                <p>${oferta.descripcion}</p>
            </div>
        `;
        container.appendChild(card);
    });
});