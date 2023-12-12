const newBuffer = Buffer.alloc(12, 'b');

const buffer1 = Buffer.from('brooke');
const buffer2 = Buffer.from('bailey');

const bufferArray = [ buffer1, buffer2 ];

const buffer3 = Buffer.concat(bufferArray);

const buffer4 = buffer3.toString();

console.log(buffer4);