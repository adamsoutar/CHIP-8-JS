## Chip-8 Instructions

### Supported

 - **0x00EE** Return from subroutine
 - **0x1NNN** Jump to NNN
 - **0x2NNN** Call NNN as a subroutine
 - **0x3XNN** Skip if V[X] == NN
 - **0x4XNN** Skip if V[X] != NN
 - **0x5XY0** Skip if V[X] == V[Y]
 - **0x6XNN** Set V[X] to NN
 - **0x7XNN** Add NN to V[X] (no carry flag)
 - **0x8XY0** Set V[X] to V[Y]
 - **0x8XY1** Set V[X] OR V[Y]
 - **0x8XY2** Set V[X] AND V[Y]
 - **0x8XY3** Set V[X] XOR V[Y]
 - **0x8XY4** Set V[X] to V[X] + V[Y] and update carry bit
 - **0x8XY5** Set V[X] to V[X] - V[Y] and update carry bit
 - **0x8XY6** Set VF to V[X]'s least significant bit, then right shift V[X]
 - **0x8XY7** Set V[X] to V[Y] - V[X]
 - **0x8XYE** Set VF to V[X]'s most significant bit, then left shift V[X]
 - **0x9XY0** Skip if V[X] != V[Y]
 - **0xANNN** Set I to NNN
 - **0xBNNN** Jump to NNN + V0
 - **0xCXNN** V[X] = rand(0, 255) AND NN 

### TODO

Everything else under https://en.wikipedia.org/wiki/CHIP-8
