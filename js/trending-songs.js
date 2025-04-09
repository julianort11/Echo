
function cardArtist() {
    window.mostrarDatos = function(data){
        const divSongs = document.querySelector (".div__songs");
        divSongs.innerHTML = "";

        data.tracks.data.forEach((track) => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            card.innerHTML =  `
            <img src="${track.album.cover}" alt="Portada del álbum" />
            <h3>${track.title}</h3>
            <p>${track.artist.name}</p>
            `;
    
            divSongs.appendChild(card);
        });

    };

    const script = document.createElement("script");
    script.src = "https://api.deezer.com/chart?output=jsonp&callback=mostrarDatos";
        document.body.appendChild(script);
};