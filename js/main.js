window.mostrarDatos = function (data) {
    console.log("Conexión exitosa con deezer:");
    console.log(data); 
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const script = document.createElement("script");
    script.src = "https://api.deezer.com/chart?output=jsonp&callback=mostrarDatos";
    document.body.appendChild(script);
  });