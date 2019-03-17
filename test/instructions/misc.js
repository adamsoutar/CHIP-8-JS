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
}
