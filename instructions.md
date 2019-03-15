## Chip-8 Instructions

### Supported

 - **0x00EE** Return from subroutine
 - **0x1NNN** Jump to NNN
 - **0x2NNN** Call NNN as a subroutine
 - **0x3XNN** Skip if V[X] == NN
 - **0x4XNN** Skip if V[X] != NN
 - **0x5XY0** Skip if V[X] == V[Y]
 - **0x&XNN** Set V[X] to NN
 - **0x7XNN** Add NN to V[X] (no carry flag)

### TODO

Everything else under https://en.wikipedia.org/wiki/CHIP-8
