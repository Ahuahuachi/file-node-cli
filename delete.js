const fs = require("fs");

fs.unlink("firstNodeFile.txt", (err) => {
  if (err) console.error("No se pudo eliminar el archivo");
  else console.log("Archivo eliminado exitosamente", err);
});
