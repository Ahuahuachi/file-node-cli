const fs = require("fs"); // CommonJS

const path = process.argv[2];
const content = process.argv[3];

fs.writeFile(path, content, {}, (err) => {
  if (err) console.error("No se pudo escribir el archivo", err);
  else console.log(`Se ha creado el archivo ${path} correctamente`);
});
