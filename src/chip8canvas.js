class Chip8Canvas {
  constructor (canvas, program) {
    this.core = new window.Chip8Core(this.draw.bind(this), program)
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
  }

  draw (gfx) {
    let blockSize = this.canvas.height / 32

    for (let y = 0; y < gfx.length; y++) {
      for (let x = 0; x < gfx[0].length; x++) {
        this.ctx.fillStyle = gfx[y][x] ? 'white' : 'black'
        this.ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize)
      }
    }
  }
}

window.Chip8 = Chip8Canvas
