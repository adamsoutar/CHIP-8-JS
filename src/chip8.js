class Chip8 {
  constructor () {
    this.initialise()
  }

  initialise () {
    this.memory = {}
    this.returnStack = []
    this.vRegisters = []
    this.iRegister = 0

    for (let i = 0; i < 16; i++) {
      this.vRegisters.push(0)
    }
  }
}

window.Chip8 = Chip8
