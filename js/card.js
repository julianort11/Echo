window.crearCardGenerica = function ({ id, title, artist, image }, tipo) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {
      canciones: [],
      albumes: [],
      artistas: []
    };
  
    const yaFavorito = favoritos[tipo]?.some(fav => fav.id === id);
  
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.tipo = tipo;
    card.dataset.id = id;
  
    if (yaFavorito) {
      card.classList.add("selected");
    }
  
    const icono = yaFavorito ? "Shape.svg" : "Shape(1).svg";
  
    card.innerHTML = `
      <img class="card__image" src="${image}" alt="${title}">
      <div class="card__body">
        <p class="card__title">${title}</p>
        <p class="card__subtitle">${artist}</p>
      </div>
      <div class="card__like">
        <img src="./storage/img/${icono}" alt="Me gusta" />
      </div>
    `;
  
    return card;
  };
