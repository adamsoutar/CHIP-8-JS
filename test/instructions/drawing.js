/* eslint-disable */
const assert = require('assert')
module.exports = (core) => {
  it('0x00E0', function () {
    core.loadProgram([
      0xF0, 0x29,
      0xD0, 0x01,
      0x00, 0xE0
    ]).runToEndSync()
    let screen = core.gfx.slice(0)
    core.initialise()
    assert(screen = core.gfx)
  })

  it('0xDXYN', function () {
    core.loadProgram([
      0x60, 0x09,
      0xF0, 0x29,
      0xD1, 0x15
    ]).runToEndSync()

    assert(core.gfx[0][0])
    assert(!(core.gfx[3][0]))
  })
}
