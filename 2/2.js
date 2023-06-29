/* 2.Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”. */

let cadena = "Somos SENA";
    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index] = "E") {
            console.log("La cadena:",cadena[index], "Si contiene E");
            break;
        }
    }

//D
    let contador = 0;
    let caracter = "o";
    for (let index = 0; index < caracter.length; index++) {
        for (let index2 = 0; index2 < cadena.length; index2++) {
            if (cadena[index2] == caracter[index]) {
                contador++
            }
        }
 
        console.log("La 'o' se repite:",contador);
    }