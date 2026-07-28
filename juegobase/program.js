let fondo= document.createElement('img')
    fondo.style.position = 'absolute';
    fondo.style.width = '1536px'
    fondo.style.height = '735px'
    fondo.style.top = '0px'
    fondo.style.left = '0px'
    fondo.src = "juegobase/Imagenes/fondo.png"
    document.body.appendChild(fondo);

    let bola = document.createElement('img')
    bola.style.position = 'absolute';
    bola.style.width = '260px'
    bola.style.height = '250px'
    bola.style.top = '350px'
    bola.style.left = '800px'
    bola.src = "juegobase/Imagenes/boton2.png"
    document.body.appendChild(bola);

    let start = document.createElement('img')
    start.style.position = 'absolute';
    start.style.width = '140px'
    start.style.height = '160px'
    start.style.top = '100px'
    start.style.left = '865px'
    start.src = "juegobase/Imagenes/botonstart.png"
    document.body.appendChild(start);

    let logo = document.createElement('img')
    logo.style.position = 'absolute';
    logo.style.width = '140px'
    logo.style.height = '160px'
    logo.style.top = '100px'
    logo.style.left = '650px'
    logo.src = "juegobase/Imagenes/fondojuego.webp"
    document.body.appendChild(logo);

    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowUp") {
        bola.src = "juegobase/Imagenes/arriba.png"
      }else if(event.key === "ArrowLeft"){
        bola.src = "juegobase/Imagenes/izquierda.png"
      }else if(event.key ==="ArrowRight"){
        bola.src = "juegobase/Imagenes/derecha.png"
      }else if(event.key ==="ArrowDown"){
        bola.src = "juegobase/Imagenes/abajo.png"
      }
    });

    start.addEventListener('click',() =>{
      start.src = "juegobase/Imagenes/botonstartpress.png"
      
      let carga = document.createElement('img')
      carga.style.position = 'absolute';
      carga.style.width = '522px'
      carga.style.height = '540px'
      carga.style.top = '69px'
      carga.style.left = '66px'
      carga.src = "juegobase/Imagenes/CARGA.gif"
      document.body.appendChild(carga);

      setTimeout(function() {
        let canvas=new Juego(520,550,20)
        document.body.removeChild(carga)
        canvas.iniciar()
        start.src = "juegobase/Imagenes/botonstart.png"
      }, 5000);
    });
