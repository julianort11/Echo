window.crearCard = function ({ id, title, artist, image }, tipo) {
    const card = document.createElement("div")
    card.classList.add("card")
    card.dataset.tipo = tipo;
    card.dataset.id = id;

    card.innerHTML = `
    <img class="card__image" src="${image}" alt="${title}">
    <div class="card__body">
      <p class="card__title">${title}</p>
      <p class="card__subtitle">${artist}</p>
    </div>
    <div class="card__like">
      <img src="./storage/img/Shape (1).svg">
    </div>
  `;

    return card;
}
