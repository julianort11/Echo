function searchMusic(query) {
    window.mostrarResultadosBusqueda = function (data) {
      let wrapper = document.getElementById("searchWrapper");
  
      if (!wrapper) {
        const seccionBusqueda = document.querySelector(".section__search");
  
        wrapper = document.createElement("article");
        wrapper.classList.add("article__trending");
        wrapper.id = "searchWrapper";
  
        const btnLeft = document.createElement("button");
        btnLeft.classList.add("carousel__btn", "left");
        btnLeft.textContent = "<";
  
        const contenedor = document.createElement("div");
        contenedor.classList.add("carousel__container");
        contenedor.id = "searchResults";
  
        const btnRight = document.createElement("button");
        btnRight.classList.add("carousel__btn", "right");
        btnRight.textContent = ">";
  
        wrapper.appendChild(btnLeft);
        wrapper.appendChild(contenedor);
        wrapper.appendChild(btnRight);
  
        seccionBusqueda.appendChild(wrapper);
  
        accionCarrousel();
      }
  
      const contenedor = document.getElementById("searchResults");
      contenedor.innerHTML = "";
  
      data.data.forEach(item => {
        const resultado = {
          id: item.id,
          title: item.title,
          artist: item.artist.name,
          image: item.album.cover_medium
        };
  
        const card = crearCardGenerica(resultado, "canciones");
        contenedor.appendChild(card);
      });
    };
  
    const script = document.createElement("script");
    script.src = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&output=jsonp&callback=mostrarResultadosBusqueda`;
    document.body.appendChild(script);
  }