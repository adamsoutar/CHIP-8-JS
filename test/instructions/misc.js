/* eslint-disable */
const assert = require('assert')
module.exports = (core) => {
  it('0x6XNN', function () {
    core.loadProgram([
      0x61, 0xFF
    ]).runToEndSync()

    assert(core.vR[1] === 0xFF)
  })

  it('0x8XY0', function () {
    core.loadProgram([
      0x61, 0xFF,
      0x80, 0x11
    ]).runToEndSync()

    assert(core.vR[0] === 0xFF)
  })

  it('0x8XY1', function () {
    core.loadProgram([
      0x60, 0b00101001,
      0x61, 0b10110101,
      0x80, 0x11
    ]).runToEndSync()

    assert(core.vR[0] === 0b10111101)
  })

  it('0x8XY2', function () {
    core.loadProgram([
      0x60, 0b00101001,
      0x61, 0b10110101,
      0x80, 0x12
    ]).runToEndSync()

    assert(core.vR[0] === 0b100001)
  })

  it('0x8XY3', function () {
    core.loadProgram([
      0x60, 0b00101001,
      0x61, 0b10110101,
      0x80, 0x13
    ]).runToEndSync()

    assert(core.vR[0] === 0b10011100)
  })

  it('0xANNN & 0xFX1E', function () {
    // `This test is slick ${(175).toString(16).toUpperCase()}`
    core.loadProgram([
      0x60, 20,
      0xA0, 5,
      0xF0, 0x1E
    ]).runToEndSync()

    assert(core.iR === 25)
  })

  it('0xCXNN', function () {
    core.loadProgram([
      0xC0, 0b10101010
    ]).runToEndSync()

    // Ensure it followed the mask
    assert((core.vR[0] & 0b01010101) === 0)
  })

  it('0xFX07 & 0xFX15', function () {
    core.loadProgram([
      0xF0, 7,
      0x61, 30,
      0xF1, 0x15,
      0xF2, 7
    ]).runToEndSync()

    assert(core.vR[0] === 0)
    assert(core.vR[2] === 30)
  })

  it('0xFX18', function () {
    core.loadProgram([
      0x60, 30,
      0xF0, 0x18
    ]).runToEndSync()
    assert(core.soundTimer === 30)
  })
}
