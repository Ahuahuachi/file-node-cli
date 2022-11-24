const fs = require("fs");

const path = process.argv[2];

fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
  if (err) console.error("No se pudo leer el archivo", err);
  else console.log(data);
});
