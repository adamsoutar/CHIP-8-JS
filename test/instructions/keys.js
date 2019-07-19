/* eslint-disable */
const assert = require('assert')
module.exports = (core) => {
  it('0xEX9E', function () {
    core.keystates.F = true
    core.loadProgram([
      0x60, 0xF,
      0xE0, 0x9E,
      0x61, 1,
      0xE2, 0x9E,
      0x62, 1
    ]).runToEndSync()
    core.keystates.F = false

    assert(core.vR[1] === 0)
    assert(core.vR[2] === 1)
  })
  it('0xEXA1', function () {
    core.keystates.F = true
    core.loadProgram([
      0x60, 0xF,
      0xE0, 0xA1,
      0x61, 1,
      0xE2, 0xA1,
      0x62, 1
    ]).runToEndSync()
    core.keystates.F = false

    assert(core.vR[1] === 1)
    assert(core.vR[2] === 0)
  })
}
