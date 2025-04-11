window.aggFAvorites = function (tipo, item) {
    const data = JSON.parse(localStorage.getItem("favoritos")) || {
        canciones: [],
        albumes: [],
        artistas: []
    };

    const yaExiste = data[tipo].some(fav => fav.id === item.id);
    if (!yaExiste) {
        data[tipo].push(item);
        localStorage.setItem("favoritos", JSON.stringify(data));
    }
};

window.removeFavorites = function(tipo, id) {
    const data = JSON.parse(localStorage.getItem("favoritos")) ||{
        canciones: [],
        albumes: [],
        artistas: []
    };
    
    data[tipo] = data[tipo].filter(fav => fav.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(data));
};

window.getFav = function () {
    return JSON.parse(localStorage,getItem("favoritos")) || {
        canciones: [],
        albumes: [],
        artistas: []
    };
};

window.countFavorites = function (tipo) {
    const data = JSON.parse(localStorage.getItem("favoritos")) || {
        canciones: [],
        albumes: [],
        artistas: []
    };

    return data[tipo]?.length || 0;
};

window.updateCounters = function () {
    document.getElementById("counter__artists").textContent = countFavorites("artistas");
    document.getElementById("counter__albums").textContent = countFavorites("albumes");
    document.getElementById("counter__songs").textContent = countFavorites("canciones");
}