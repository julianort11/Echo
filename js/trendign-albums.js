function viewAlbums(data) {
    const container = document.querySelector(".div__albums");
    container.innerHTML = "";

    data.data.forEach(album => {
        const card = document.querySelector("div")
        card.classList.add("card")

        card.innerHTML = `<img src="${album.cover_medium}" alt="${album.title}" />
        <h3>${album.title}</h3>
        <p>${album.artist.name}</p>
        `
        container.appendChild(card);
    });
}