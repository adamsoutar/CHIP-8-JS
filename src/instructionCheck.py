with open(input('file >'), 'rb') as f:
    byte = f.read(1)
    addr = 512
    while byte:
        opcode = byte
        operand = f.read(1)
        print('%s - 0x%s%s' % (addr, opcode.hex().upper(), operand.hex().upper()))
        addr += 2
        byte = f.read(1)
