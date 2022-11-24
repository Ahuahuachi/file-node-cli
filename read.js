const fs = require("fs");

fs.readFile("firstNodeFile.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) console.error("No se pudo leer el archivo", err);
  else console.log(data);
});
