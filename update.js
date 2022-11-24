const fs = require("fs");

fs.appendFile(
  "firstNodeFile.txt",
  "\nMás datos",
  { encoding: "utf-8" },
  (err) => {
    if (err) console.error("No se pudo editar el archivo", err);
    else console.log("Archivo modificado");
  }
);
