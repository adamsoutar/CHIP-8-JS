/* eslint-disable */
const assert = require('assert')
module.exports = (core) => {
  it('0x6XNN', function () {
    core.loadProgram([
      0x61, 0xFF
    ]).runToEndSync()

    assert(core.vR[1] === 0xFF)
  })
}
