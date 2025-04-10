function cardArtists() {
    window.mostrarArtistasTendencia = function (data) {
        const divArtist = document.querySelector(".div__artist");
        divArtist.innerHTML = "";

        data.artists.data.forEach((artist) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            <img src="${artist.picture_medium}" alt="${artist.name}" />
            <h3>${artist.name}</h3>
            `;

            divArtist.appendChild(card);
        });
    };

    const script = document.createElement("script");
    script.src = "https://api.deezer.com/chart?output=jsonp&callback=mostrarArtistasTendencia";
    document.body.appendChild(script);
};