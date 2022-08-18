// dada una cadena de texto, devolver el caracter más usado.

// ejemplo:
// masUsado("estemenesperro")
// devuelve;
// Lo que más se repite es: e

// Crear una funcion que reciba el texto
// Mapear letras en json
// recorrer el mapeo
// hacemos condicion para ver que contado es mayor

// Como hacerlo:

/*
-Crear una funcion que recibe el texto
-Mapear letras en json
-recorrer el mapeo
-hacemos condicion para ver que contado es mayor
*/

function masUsado(texto) {

    let mapeoLetras = {};
    let max_rep = 0;
    let letra_mas_repetida = ""
    // recorrer el texto y sacar cada letra para agregar al mapeo
    for (let letra of texto ) {
        if(!mapeoLetras[letra]){
            mapeoLetras[letra] = 1;
        }else{
            mapeoLetras[letra] ++;

        }
    }
    for ( letra in mapeoLetras ){
        if (mapeoLetras[letra].toString().trim().length ===1 && max_rep){
            max_rep = mapeoLetras[letra];
            letra_mas_repetida = letra;
        }
    }
    return letra_mas_repetida;
}
console.log("la letra mas usada es",masUsado("ethaeenjedutunporras.alba"));