const fs = require("fs");

const path = process.argv[2];

if (!path) {
  console.error("La ruta del archivo a eliminar es obligatoria");
} else {
  fs.unlink(path, (err) => {
    if (err) console.error("No se pudo eliminar el archivo", err);
    else console.log("Archivo eliminado exitosamente");
  });
}
