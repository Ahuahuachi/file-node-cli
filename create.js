const fs = require("fs"); // CommonJS

fs.writeFile(
  "firstNodeFile.txt", // ruta archivo
  "Hello world", // contenido del nuevo archivo
  { encoding: "utf-8" }, // opciones para crear el archivo
  (err) => {
    // callback, se ejecuta siempre al finalizar el proceso principal
    if (err) {
      console.error("No se pudo escribir el archivo", err);
    } else {
      console.log("Se ha creado el archivo correctamente");
    }
  }
);
