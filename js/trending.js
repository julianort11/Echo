export function cardArtist() {
    window.mostrarDatos = function(data){
        const Divsongs = document.querySelector (".div__songs");
        Divsongs.innerHTML = ""

        data.tracks.data.forEach(element => {
            const card = document.createElement("div")
            card.classList.add("card");
        });
    }
}