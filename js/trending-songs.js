function cardSongs() {
    window.mostrarCancionesTendencia = function (data) {
        const divSongs = document.querySelector(".div__songs");
        divSongs.innerHTML = "";

        data.tracks.data.forEach((track) => {
            const cancion = {
                id: track.id,
                title: track.title,
                artist: track.artist.name,
                image: track.album.cover_medium,
            };

            const card = crearCardGenerica (cancion, "canciones");
            divSongs.appendChild(card);
        });

    };

    const script = document.createElement("script");
    script.src = "https://api.deezer.com/chart?output=jsonp&callback=mostrarCancionesTendencia";
    document.body.appendChild(script);
};

window.cardSongs = cardSongs