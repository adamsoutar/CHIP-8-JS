## Chip-8 Instructions

### Supported (29/35)

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
 - **0xFX07** V[X] = delay timer
 - **0xFX15** delay timer = V[X]
 - **0xFX18** sound timer = V[X]
 - **0xFX1E** Add V[X] to i
 - **0xFX55** Copy V0 to V[X] (inc) into i onwards
 - **0xFX65** Copy i to i + X into V0 onwards
 - **0x00E0** Clear Screen
 - **0xDXYN** Draw 8xN sprite at X Y from I

### TODO (6/35)

 - **0x0NNN** Call RCA1802 program at NNN (What does that mean?)
 - **0xEX9E** Skip if key in V[X] is pressed
 - **0xEXA1** Skip if key in V[X] isn't pressed
 - **0xFX0A** Halt until a key is pressed, then store it in V[X]
 - **0xFX29** Set I to font set location for char in V[X]
 - **0xFX33** I don't understand *in the slightest* what this does


https://en.wikipedia.org/wiki/CHIP-8
