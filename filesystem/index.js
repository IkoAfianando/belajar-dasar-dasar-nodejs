const fs = require("fs");

const textIkoCallback = (error, data) => {
  if (error) {
    console.log(`File tidak dapat dibaca`);
    return;
  }
  console.log(data);
};

fs.readFile("./filesystem/notes.txt", "UTF-8", textIkoCallback);
