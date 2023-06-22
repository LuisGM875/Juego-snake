class Juego {
  constructor(ancho, largo, cuerpotamano) {
    this.espacioJuego = document.createElement("canvas");
    this.ctx = this.espacioJuego.getContext("2d");
    
    this.espacioJuego.width = ancho;
    this.espacioJuego.height = largo;
    this.espacioJuego.style.position = 'absolute';
    this.espacioJuego.style.top = '69px';
    this.espacioJuego.style.left = '66px';
    this.espacioJuego.style.backgroundImage = "url('juegobase/Imagenes/grass.jpg')";
    this.espacioJuego.style.backgroundSize = "cover";
    document.body.appendChild(this.espacioJuego);

    this.cuerpotamano = cuerpotamano;
    this.anchoSerpiente = ancho / cuerpotamano;
    this.largoSerpiente = largo / cuerpotamano;
    this.serpiente = new Serpiente(this.anchoSerpiente, this.largoSerpiente, cuerpotamano);
    this.corazon = new Manzana(this.anchoSerpiente, this.largoSerpiente, cuerpotamano);
    this.score = 0;
    this.tiempo;
    document.addEventListener("keydown", this.presionartecla.bind(this));

    }
  
    iniciar() {
      this.tiempo = setInterval(() => {
        this.ctx.clearRect(0, 0, this.espacioJuego.width, this.espacioJuego.height);
        this.serpiente.mover();
        this.colision();
        this.serpiente.draw(this.ctx);
        this.corazon.draw(this.ctx);
        this.drawScore();
      }, 100);
    }
  
    presionartecla(event) {
      this.serpiente.direccionCabeza(event.keyCode);
    }
  
    colision() {
      let cabeza = this.serpiente.cuerpoSerpiente[0];
      if (
        cabeza.x < 0 || cabeza.x >= this.anchoSerpiente || cabeza.y < 0 || cabeza.y >= this.largoSerpiente
      ) {
        this.terminar();
      }
  
      for (let i = 1; i < this.serpiente.cuerpoSerpiente.length; i++) {
        if (cabeza.x === this.serpiente.cuerpoSerpiente[i].x && cabeza.y === this.serpiente.cuerpoSerpiente[i].y) {
          this.terminar();
        }
      }

      if (cabeza.x === this.corazon.posiciones.x && cabeza.y === this.corazon.posiciones.y) {
        this.serpiente.movercuerpo();
        this.score++;
        this.corazon.cambiarPosicion();
      }
    }
  
    drawScore() {
      this.ctx.font = "15px Arial";
      this.ctx.fillStyle = "black";
      
      const text = "Score: " + this.score;
      const textX = this.espacioJuego.width - this.ctx.measureText(text).width - 10;
      const textY = 20;
      
      this.ctx.fillText(text, textX, textY);
    }
  
    terminar() {
      clearInterval(this.tiempo);
      this.ctx.font = "40px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText("Juego terminado ...", this.espacioJuego.width / 2 - 130, this.espacioJuego.height / 2);
      const game = this; 
      setTimeout(function() {
        document.body.removeChild(game.espacioJuego); 
      }, 4000);
    }
  }