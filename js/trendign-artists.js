function viewArtists(data) {
    const container = document.querySelector(".div__artist");
    container.innerHTML= "";

    data.data.forEach(artist => {
        const card = document.querySelector("div");
        card.classList.add("card");
        
        card.innerHTML = `
        <img src="${artist.picture_medium}" alt="${artist.name}" />
        <h3>${artist.name}</h3>
        `

        container.appendChild(card);
    });
}

function uploadArtists() {
    window.viewArtists = viewArtists;

    const script = document.createElement("script");
    script.src = "https://api.deezer.com/chart/0/artists?output=jsonp&callback=mostrarArtistasTendencia";
    document.body.appendChild(script);
}