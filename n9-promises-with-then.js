const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function skaiciausIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(parseInt(data));
        });
    });
}

async function tekstoIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(data);
        });
    });
}

function readFile(name, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, options, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

async function main() {
    var failoPavadinimas = await tekstoIvedimas("Įvesk failo pavadinimą:");
    let data = '';
    url = './n9-failai/';
    let failas = readFile(`./n9-failai/${failoPavadinimas}`, 'utf-8');

    failas
    .then(data => console.log(data))
    .catch(error => console.log('Toks failas nerastas. Detali informacija', error))

    rl.close();
}

main();



/*
paprasyti ivesti failo varda
perskaityti faila
jei perskaite be klaidu - atspausdinti teksta
jei klaidos - atspausdinti klaida
*/