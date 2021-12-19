const fs = require("fs");

const readableStream = fs.createReadStream("./intro/tes.txt", {
  highWaterMark: 10,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {}
});

readableStream.on("end", () => {
  console.log("Done");
});
