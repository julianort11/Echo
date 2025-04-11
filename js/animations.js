window.accionCarrousel = function () {
    const carousels = document.querySelectorAll(".article__trending");
  
    carousels.forEach(carousel => {
      const container = carousel.querySelector(".carousel__container");
      const btnLeft = carousel.querySelector(".carousel__btn.left");
      const bntRight = carousel.querySelector(".carousel__btn.right");
  
      btnLeft.addEventListener("click", () => {
        container.scrollBy({ left: -300, behavior: "smooth" });
      });
  
      bntRight.addEventListener("click", () => {
        container.scrollBy({ left: 300, behavior: "smooth" });
      });
    });
  };