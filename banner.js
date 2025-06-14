document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards-banner");

    const banners = [
        {
            imagen: "IMGOFERTAS/oferta banner.jpg",
            enlace: "ofertas.html",
            alt: "Oferta destacada"
        },
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

    const videos = [
        {
            src: "VIDEO/videofarmaonline.mp4",
            enlace: "https://www.farmaonline.com/",
            alt: "Video destacado"
        },
    ];

    videos.forEach(({ src, enlace, alt }) => {
        const link = document.createElement("a");
        link.href = enlace;
        link.className = "card-banner";
        link.target = "_blank";

        const video = document.createElement("video");
        video.src = src;
        video.className = "card-video";
        video.setAttribute("alt", alt);
        video.setAttribute("autoplay", "");
        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("loop", "");
        video.muted = true;

        link.appendChild(video);
        container.appendChild(link);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                        video.currentTime = 0;
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(video);
    });
});