const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, listar, rango) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= rango; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    if (listar) {
      console.log('==========================='.rainbow);
      console.log('      Tabla del:', colors.green(base));
      console.log('==========================='.rainbow);

      console.log(consola);
    }

    return `tabla-${base}.txt`.rainbow + ' creado';
  } catch (err) {
    throw err;
  }
};

module.exports = { createFile };
