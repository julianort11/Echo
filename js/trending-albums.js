function cardAlbums() {
    window.mostrarAlbumsTendencia = function (data) {
        const divAlbums = document.querySelector(".div__albums");
        divAlbums.innerHTML = "";

        data.data.forEach((albums) => {
            const albumInfo = {
                id: albums.id,
                title: albums.title,
                artist: albums.artist.name,
                image: albums.cover_medium,
            };

            const card = crearCard(albumInfo, "albumes")
            divAlbums.appendChild(card);
        });
    };

    const script = document.createElement("script");
    script.src = "https://api.deezer.com/chart/0/albums?output=jsonp&callback=mostrarAlbumsTendencia";
    document.body.appendChild(script);
};

window.cardAlbums = cardAlbums
