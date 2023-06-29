/* 3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d. */

let cadena = "Javascript es genial";

    let contador = 0;
    let espacio= " "
    for (let index = 0; index < espacio.length; index++) {
        for (let index2 = 0; index2 < cadena.length; index2++) {
            if (cadena[index2] == espacio[index]) {
                contador++
            }
        }

        console.log(contador);
    }
    