function cardAlbums() {
    window.mostrarAlbumsTendencia = function (data) {
        const divAlbums = document.querySelector(".div__albums");
        divAlbums.innerHTML = "";

        data.data.forEach((albums) => {
            const card = document.createElement("div")
            card.classList.add("card")

            card.innerHTML = `
            <img src="${albums.cover_medium}" alt="${albums.title}" />
            <h3>${albums.title}</h3>
            <p>${albums.artist.name}</p>
            `;

            divAlbums.appendChild(card);
        });
    };

    const script = document.createElement("script");
    script.src = "https://api.deezer.com/chart/0/albums?output=jsonp&callback=mostrarAlbumsTendencia";
    document.body.appendChild(script);
};
