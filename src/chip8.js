function add8bit (a, b) {
  let c = a + b
  while (c > 255) c -= 255
  return c
}

function sub8bit (a, b) {
  let c = a - b
  while (c < 0) c += 255
  return c
}

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

    let instruction = this.memory[this.pC] << 8 | this.memory[this.pC + 1]
    let opcode = instruction >>> 12

    switch (opcode) {
      case 0x0:
        switch (instruction) {
          case 0x00E0:
            // TODO: Clear the screen
            break
          case 0x00EE:
            if (this.stackPointer === -1) {
              console.log(`ERROR - Return without enclosing subroutine!`)
            }
            this.pC = this.stack[this.stackPointer] - 2
            this.stackPointer--
            break
          default:
            console.log('WARNING - The 0x0NNN instruction is not supported')
        }
        break
      case 0x1:
        this.pC = (instruction & 0x0FFF) - 2
        break
      case 0x2:
        this.stack.push(this.pC)
        this.stackPointer++
        this.pC = (instruction & 0x0FFF) - 2
        break
      case 0x3:
        if (
          this.vR[instruction & 0x0F00 >>> 8] ===
          instruction & 0x00FF
        ) this.skipFlag = true
        break
      case 0x4:
        if (
          this.vR[instruction & 0x0F00 >>> 8] !==
          instruction & 0x00FF
        ) this.skipFlag = true
        break
      case 0x5:
        if (
          this.vR[instruction & 0x0F00 >>> 8] ===
          this.vR[instruction & 0x00F0 >>> 4]
        ) this.skipFlag = true
        break
      case 0x6:
        this.vR[instruction & 0x0F00 >>> 8] = instruction & 0x00FF
        break
      case 0x7:
        let v = instruction & 0x0F00 >>> 8
        this.vR[v] = add8bit(this.vR[v], instruction & 0x00FF)
        break
      case 0x8:
        let n = instruction & 0x000F

        let x = instruction & 0x0F00 >>> 8
        let y = instruction & 0x00F0 >>> 4
        let vX = this.vR[x]
        let vY = this.vR[y]

        switch (n) {
          case 0:
            this.vR[x] = vY
            break
          case 1:
            this.vR[x] = vX | vY
            break
          case 2:
            this.vR[x] = vX & vY
            break
          case 3:
            this.vR[x] = vX ^ vY
            break
          case 4:
            this.vR[x] = add8bit(vX, vY)
            // Carry flag
            this.vR[0xF] = (vX + vY > 255) ? 1 : 0
            break
          case 5:
            this.vR[x] = sub8bit(vX, vY)
            // Carry flag
            this.vR[0xF] = (vX - vY < 0) ? 0 : 1
            break
        }
        break
      default:
        console.log(`WARNING - ${opcode} is not a supported opcode.`)
        break
    }

    this.pC += 2
  }
}

window.Chip8 = Chip8
