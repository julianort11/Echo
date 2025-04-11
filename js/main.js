document.addEventListener("DOMContentLoaded", () => {
    cardSongs()
    cardArtists()
    cardAlbums()
    accionCarrousel();

    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".card__like");

        if (btn) {
            const card = btn.closest(".card");
            const img = btn.querySelector("img");
            const tipo = card.dataset.tipo;

            const item = {
                id: card.dataset.id,
                title: card.querySelector(".card__title")?.textContent || "",
                artist: card.querySelector(".card__subtitle")?.textContent || "",
                image: card.querySelector(".card__image")?.src || ""
            };

            const esFavorito = card.classList.toggle("selected");

            if (esFavorito) {
                aggFAvorites(tipo, item);
                img.src = "../storage/img/Shape.svg";
            } else {
                removeFavorites(tipo, item.id);
                img.src = "../storage/img/Shape (1).svg";
            }

            updateCounters();
        }
    });
});
document.getElementById("searchAll").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const query = e.target.value.trim();
        if ((query)) {
            searchMusic(query);
        }
    }
});