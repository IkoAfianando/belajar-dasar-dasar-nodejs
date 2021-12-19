const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log(`File tidak dapat dibaca`);
    return;
  }
  console.log(data);
};

fs.readFile("./intro/tes.txt", "utf-8", fileReadCallback);
