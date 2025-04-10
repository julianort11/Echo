import { accionCarrousel } from "./animations.js";

document.addEventListener("DOMContentLoaded", () => {
    cardSongs()
    cardArtists()
    cardAlbums()

    accionCarrousel();

    document.addEventListener("click", (e) =>{
        const btn = e.target.closest(".card__like");

        if (btn) {
            const card = btn.closest(".card");
            const img = btn.querySelector("img");
            
            card.classList.toggle("selected");

            const isFav = card.classList.contains("selected");

            img.src = isFav ? "./storage/img/Shape.svg" : "./storage/img/Shape (1).svg";
        }
    })
 });
