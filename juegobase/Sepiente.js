class Serpiente {
    constructor(anchoCuerpo, largoCuerpo, tamanoCuerpo) {
      this.anchoCuerpo = anchoCuerpo;
      this.largoCuerpo = largoCuerpo;
      this.tamanoCuerpo = tamanoCuerpo;
      this.cuerpoSerpiente = [
        { x: 3, y: 1, image: "juegobase/Imagenes/cuerpo.gif" },
        { x: 2, y: 1, image: "juegobase/Imagenes/cuerpo.gif" },
        { x: 1, y: 1, image: "juegobase/Imagenes/cuerpo.gif" },
      ];

      //generar direccion de salida de serpiente
      let numeroAleatorio = Math.floor(Math.random() * 2) + 1;

      if(numeroAleatorio==1){
        this.direccion = "derecha";
        this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-derecha.gif";
      }else if(numeroAleatorio==2){
        this.direccion = "abajo";
        this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-abajo.gif";
      }

    }
  
    draw(ctx) {
      //dibujar cuerpo
      this.cuerpoSerpiente.forEach((cuerpo) => {
        const image = new Image();
        image.src = cuerpo.image;
        ctx.drawImage(image, cuerpo.x * this.tamanoCuerpo, cuerpo.y * this.tamanoCuerpo, this.tamanoCuerpo, this.tamanoCuerpo);
      });
    }
  
    direccionCabeza(keyCode) {
      switch (keyCode) {
        case 37: 
          if (this.direccion !== "derecha") {
            this.direccion = "izquierda";
            this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-izquierda.gif";
          }
          break;
        case 38: 
          if (this.direccion !== "abajo") {
            this.direccion = "arriba";
            this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-arriba.gif";
          }
          break;
        case 39: 
          if (this.direccion !== "izquierda") {
            this.direccion = "derecha";
            this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-derecha.gif";
          }
          break;
        case 40: 
          if (this.direccion !== "arriba") {
            this.direccion = "abajo";
            this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-abajo.gif";
          }
          break;
      }
    }
  
    movercuerpo() {
      //toma como referencia el cuerpo de la posicion 1 para clonar el cuerpo y mover su posicion
      const tail = { ...this.cuerpoSerpiente[this.cuerpoSerpiente.length - 1] };
      tail.image = "juegobase/Imagenes/cuerpo.gif";
      this.cuerpoSerpiente.push(tail);
    }

    mover() {
      // toma la cabeza como referencia para clonar y modificar su posicion
      let cabeza = { ...this.cuerpoSerpiente[0] };
  
      switch (this.direccion) {
        case "arriba":
          cabeza.y--;
          break;
        case "abajo":
          cabeza.y++;
          break;
        case "izquierda":
          cabeza.x--;
          break;
        case "derecha":
          cabeza.x++;
          break;
      }
      this.cuerpoSerpiente.unshift(cabeza);
      this.cuerpoSerpiente.pop();
    }
  }