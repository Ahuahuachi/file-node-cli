const fs = require("fs");
const command = process.argv[2];
const fileName = process.argv[3] ? process.argv[3] : "";

const createFile = (path, ext, cb) => {
  fs.writeFile(`${path}.${ext}`, "", {}, cb);
};

switch (command) {
  case "init":
    createFile("index", "html", (err) => {
      if (err) console.error("No se pudo crear el archivo html", err);
    });
    createFile("main", "js", (err) => {
      if (err) console.error("No se pudo crear el archivo html", err);
    });
    createFile("style", "css", (err) => {
      if (err) console.error("No se pudo crear el archivo html", err);
    });
    break;

  case "html":
    createFile(fileName, command, (err) => {
      if (err) console.error("No se pudo crear el archivo", err);
      else console.log("Archivo HTML creado");
    });
    break;

  case "css":
    createFile(fileName, command, (err) => {
      if (err) console.error("No se pudo crear el archivo", err);
      else console.log("Archivo CSS creado");
    });
    break;

  case "js":
    createFile(fileName, command, (err) => {
      if (err) console.error("No se pudo crear el archivo", err);
      else console.log("Archivo JS creado");
    });
    break;

  default:
    console.log("Invalid command");
    break;
}
