/* eslint-disable */
const assert = require('assert')
module.exports = (core) => {
  it('0x7XNN', function () {
    core.loadProgram([
      0x61, 0x01,
      0x71, 0x04,
      0x62, 0xFF,
      0x72, 0x01
    ]).runToEndSync()

    assert(core.vR[1] === 5)
    assert(core.vR[2] === 1)
    assert(core.vR[0xF] === 0)
  })

  it('0x8XY4', function () {
    core.loadProgram([
      0x60, 1,
      0x61, 4,
      0x80, 0x14
    ]).runToEndSync()

    assert(core.vR[0] === 5)
    assert(core.vR[0xF] === 0)

    // Check carry bit
    core.loadProgram([
      0x60, 254,
      0x61, 11,
      0x80, 0x14
    ]).runToEndSync()

    assert(core.vR[0] === 10)
    assert(core.vR[0xF] === 1)
  })

  it('0x8XY5', function () {
    core.loadProgram([
      0x60, 5,
      0x61, 4,
      0x80, 0x15
    ]).runToEndSync()

    assert(core.vR[0] === 1)
    assert(core.vR[0xF] === 1)

    // Check carry bit
    core.loadProgram([
      0x61, 5,
      0x80, 0x15
    ]).runToEndSync()

    assert(core.vR[0] === 250)
    assert(core.vR[0xF] === 0)
  })

  it('0x8XY6', function () {
    core.loadProgram([
      0x60, 0b10110101,
      0x80, 6
    ]).runToEndSync()

    assert(core.vR[0] === 0b1011010)
    assert(core.vR[0xF] === 1)

    core.loadProgram([
      0x60, 0b10110100,
      0x80, 6
    ]).runToEndSync()

    assert(core.vR[0] === 0b1011010)
    assert(core.vR[0xF] === 0)
  })

  it('0x8XY7', function () {
    core.loadProgram([
      0x60, 4,
      0x61, 5,
      0x80, 0x17
    ]).runToEndSync()

    assert(core.vR[0] === 1)
    assert(core.vR[0xF] === 1)

    // Check wrap around
    core.loadProgram([
      0x60, 5,
      0x80, 0x17
    ]).runToEndSync()

    assert(core.vR[0] === 250)
    assert(core.vR[0xF] === 0)
  })

  it('0x8XYE', function () {
    core.loadProgram([
      0x60, 0b00110101,
      0x80, 0x0E
    ]).runToEndSync()

    assert(core.vR[0] === 0b1101010)
    assert(core.vR[0xF] === 0)

    core.loadProgram([
      0x60, 0b10110101,
      0x80, 0x0E
    ]).runToEndSync()

    assert(core.vR[0] === 0b1101010)
    assert(core.vR[0xF] === 1)
  })

  it('0xFX33', function () {
    core.loadProgram([
      0xA0, 2,
      0x60, 123,
      0xF0, 0x33
    ]).runToEndSync()

    assert(core.memory[core.iR] === 1)
    assert(core.memory[core.iR + 1] === 2)
    assert(core.memory[core.iR + 2] === 3)
  })
}
