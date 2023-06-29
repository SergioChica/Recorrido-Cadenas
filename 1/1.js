/* 1.Dada la cadena “Javascript es un buen lenguaje”:
a) Leer e imprimir los elementos de índices 3, 6, 8
b) Recorra la cadena usando ciclo for. */

let cadena = "Javascript es un buen lenguaje"

//A
    console.log(cadena[3]);
    console.log(cadena[6]);
    console.log(cadena[8]);

//B
    for (let index = 0; index < cadena.length; index++) {
        console.log(cadena[index]);
        
    }