class Manzana {
    constructor(anchoCuerpo, largoCuerpo, cuerpotamano) {
      this.anchoCuerpo = anchoCuerpo;
      this.largoCuerpo = largoCuerpo;
      this.cuerpotamano = cuerpotamano;
      this.posiciones = { x: 10, y: 10 };
      this.image = new Image();
      this.image.src = "juegobase/Imagenes/comida.gif";
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.posiciones.x * this.cuerpotamano, this.posiciones.y * this.cuerpotamano, this.cuerpotamano, this.cuerpotamano);
    }
  
    cambiarPosicion() {
      let x = Math.floor(Math.random() * this.anchoCuerpo);
      let y = Math.floor(Math.random() * this.largoCuerpo);
      this.posiciones = { x: x, y: y };
    }
  }