const fs = require("fs");

const data = fs.readFileSync("./filesystem/notes.txt", "utf-8");
console.log(data);
