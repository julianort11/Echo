function cardArtists() {
    window.mostrarArtistasTendencia = function (data) {
        const divArtist = document.querySelector(".div__artist");
        divArtist.innerHTML = "";

        data.artists.data.forEach((artist) => {
            const artista = {
                id: artist.id,
                title: artist.name,
                artist: "",
                image: artist.picture_medium,
            };

            const card = crearCardGenerica(artista, "artistas")
            divArtist.appendChild(card);
        });
    };

    const script = document.createElement("script");
    script.src = "https://api.deezer.com/chart?output=jsonp&callback=mostrarArtistasTendencia";
    document.body.appendChild(script);
};

window.cardArtists = cardArtists