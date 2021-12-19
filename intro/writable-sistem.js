const fs = require("fs");

const writableStream = fs.createWriteStream("./intro/outro.txt");

writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.write("Ini merupakan teks baris ketiga!\n");
writableStream.end();