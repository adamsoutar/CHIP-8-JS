/* eslint-disable */

const assert = require('assert')
const Chip8Core = require('../src/chip8core.js')

describe('Instructions', function () {
  let core = new Chip8Core()
  function importTest (name, path) {
    describe(name, () => require(path)(core))
  }

  importTest('Maths', './instructions/math.js')
  importTest('Drawing', './instructions/drawing.js')
  importTest('Jumps', './instructions/jumps.js')
  importTest('Misc', './instructions/misc.js')
})
