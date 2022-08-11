// dado un texto y una busqueda, censurar todas las coincidencias de la busqueda en el texto con [-CENSURADO]
// Si el texto y la busqueda están vacios, mostrar "No puedes leer el texto y la busqueda" en el caso de que ambos
// parámetros no lleguen

// como hacerlos:
/*
-Crear una funcion que reciba un texto y una busqueda
-Condiciones en el caso de que algún parámetro de false
-Reemplazar la busqueda por [-CENSURADO] en el texto
*/

function censurado(texto=false, busqueda=false){
    let resultado = "";

    // comprobamos si llegan los parámetro

    if(!texto && !busqueda) {
        
        resultado = "No puedes leer el texto y busqueda";

    }
    else if(!texto && busqueda) 
    {
        resultado = "No puedes leer el texto";
    } else if(texto && !busqueda){
        resultado = "No puedes hacer la busqueda";
    }
    else if(texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda,'gi'),"[-CENSURADO]");
    }
    return resultado;
}

console.log(censurado('hola, hola hola', 'hola'));