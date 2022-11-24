const fs = require("fs");

const path = process.argv[2];
const data = process.argv[3];

if (data) {
  fs.appendFile(path, `\n${data}`, { encoding: "utf-8" }, (err) => {
    if (err) console.error(`No se pudo editar el archivo ${path}`, err);
    else console.log("Archivo modificado");
  });
} else {
  console.error("Los datos para modificar son obligatorios");
}
