# Chip-8 JS

A web Chip-8 emulator that can read ROMs from your local drive!

(As far as I'm aware, the only one that does so)

## But people have already made Chip-8 emulators!

Yep. Mine's not the first, and it's not the best, but it was a brilliant learning experience and very fun to create.

## Help

There are some bugs in this version. Some ROMs run fine, others run strangely, and some don't run at all. In an effort to debug this, I wrote unit tests for every instruction... they all pass. Which means my understanding of one or more of the instructions is wrong. If you know why things don't seem to go up on the screen (bullets, the letters in the ZERO demo etc), which I think is related to the subtract command, please do contribute to the repo.

## Web usage

```javascript
 <input type='file' onChange='loadProgram(this)' />
 <canvas id='cnv' width='1000' height='500'></canvas>
 <script>
   let myChip8
   document.addEventListener('DOMContentLoaded', (event) => {
    myChip8 = new Chip8Canvas(document.getElementById('cnv'))
   })
   function loadProgram (f) {
     let rom = f.files[0]
     let reader = new FileReader()
     reader.onloadend = () => {
       myChip8.core.loadProgram(Array.from(new Uint8Array(reader.result)))
       myChip8.core.start()
     }
     reader.readAsArrayBuffer(rom)
   }
 </script>
```

This is all you need to load ROMs from the drive.

## Programmatic Usage

For testing etc

```javascript
const Chip8Core = require('src/chip8core.js')
const core = new Chip8Core()
core.loadProgram([
      0x61, 0x01,
      0x71, 0x04,
      0x62, 0xFF,
      0x72, 0x01
    ]).runToEndSync()
```

Then you can do something like

```javascript
assert(core.vR[1] === 5)
```

(Where vR represents the v registers)

To assert that the operation completed successfully.
