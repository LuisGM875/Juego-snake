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
      this.direccion = "right";
    }
  
    draw(ctx) {
      this.cuerpoSerpiente.forEach((cuerpo) => {
        const image = new Image();
        image.src = cuerpo.image;
        ctx.drawImage(image, cuerpo.x * this.tamanoCuerpo, cuerpo.y * this.tamanoCuerpo, this.tamanoCuerpo, this.tamanoCuerpo);
      });
    }
  
    mover() {
      let cabeza = { ...this.cuerpoSerpiente[0] };
  
      switch (this.direccion) {
        case "up":
          cabeza.y--;
          break;
        case "down":
          cabeza.y++;
          break;
        case "left":
          cabeza.x--;
          break;
        case "right":
          cabeza.x++;
          break;
      }

      this.cuerpoSerpiente.unshift(cabeza);
      this.cuerpoSerpiente.pop();
    }
  
    direccionCabeza(keyCode) {
      switch (keyCode) {
        case 37: 
          if (this.direccion !== "right") {
            this.direccion = "left";
            this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-izquierda.gif";
          }
          break;
        case 38: 
          if (this.direccion !== "down") {
            this.direccion = "up";
            this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-arriba.gif";
          }
          break;
        case 39: 
          if (this.direccion !== "left") {
            this.direccion = "right";
            this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-derecha.gif";
          }
          break;
        case 40: 
          if (this.direccion !== "up") {
            this.direccion = "down";
            this.cuerpoSerpiente[0].image = "juegobase/Imagenes/cuerpo-abajo.gif";
          }
          break;
      }
    }
  
    movercuerpo() {
      const tail = { ...this.cuerpoSerpiente[this.cuerpoSerpiente.length - 1] };
      tail.image = "juegobase/Imagenes/cuerpo.gif";
      this.cuerpoSerpiente.push(tail);
    }
  }