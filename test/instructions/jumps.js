/* eslint-disable */
const assert = require('assert')
module.exports = (core) => {
  it('0x1NNN', function () {
    core.loadProgram([
      0x12, 0x04,
      0x61, 0xFF,
      0x62, 0xFF
    ]).runToEndSync()

    assert(core.vR[1] === 0)
    assert(core.vR[2] === 0xFF)
  })

  it('0x2NNN & 0x00EE', function () {
    core.loadProgram([
      0x22, 0x06,
      0x61, 0xFF,
      0x1F, 0xFF,
      0x62, 0xFF,
      0x00, 0xEE,
      0x63, 0xFF
    ]).runToEndSync()

    assert(core.vR[1] === 0xFF)
    assert(core.vR[2] === 0xFF)
    assert(core.vR[3] === 0)
  })
  
  it('0x3XNN', function () {
    core.loadProgram([
      0x61, 0x02,
      0x31, 0x02,
      0x61, 0x01,
      0x30, 0x01,
      0x60, 0x01
    ]).runToEndSync()

    assert(core.vR[0] === 1)
    assert(core.vR[1] === 2)
  })

  it('0x4XNN', function () {
    core.loadProgram([
      0x61, 0x02,
      0x41, 0x02,
      0x61, 0x01,
      0x41, 0x02,
      0x61, 0x02
    ]).runToEndSync()
    assert(core.vR[1] === 1)
  })

  it('0x5XY0', function () {
    core.loadProgram([
      0x61, 0x01,
      0x62, 0x01,
      0x51, 0x20,
      0x63, 0x01,
      0x51, 0x30,
      0x64, 0x01
    ]).runToEndSync()

    assert(core.vR[3] === 0)
    assert(core.vR[4] === 1)
  })
}
