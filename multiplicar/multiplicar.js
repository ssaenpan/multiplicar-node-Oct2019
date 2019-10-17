const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==========================='.green);
    console.log(`====== Tabla de ${base} =====`.red);
    console.log('==========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}= ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {

        if (!Number(base)) {
            rej(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}= ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                rej(err);
            else
                res(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}