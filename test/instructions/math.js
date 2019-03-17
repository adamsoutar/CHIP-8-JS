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
}
