class Chip8 {
  constructor (p) {
    this.initialise()
    if (p) this.loadProgram(p)
  }

  initialise () {
    this.memory = {}
    this.stack = []
    this.vR = []
    this.iR = 0
    this.stackPointer = -1
    this.pC = 0x200
    this.delayTimer = 60
    this.soundTimer = 60
    this.skipFlag = false

    for (let i = 0; i < 16; i++) {
      this.vRegisters.push(0)
    }
  }

  loadProgram (p) {
    // Load programs from 0x200 onwards
    for (let i = 0; i < p.length; i++) {
      this.memory[0x200 + i] = p[i]
    }
  }

  doCycle () {
    if (this.skipFlag) {
      this.pC++
      this.skipFlag = false
    }

    if (this.pC < 0x200) {
      console.log(`WARNING - Jumped below program memory (pointer: ${this.pC}).
  This *might* indicate a bug - or just an interesting program.`)
    }

    let instruction = this.memory[this.pC]
    let opcode = instruction >>> 12

    switch (opcode) {
      case 0x3:
        if (
          this.vR[instruction & 0x0F00 >>> 8] ===
          instruction & 0x00FF
        ) this.skipFlag = true
        break
      default:
        console.log(`WARNING - ${opcode} is not a supported opcode.`)
        break
    }

    this.pC++
  }
}

window.Chip8 = Chip8
