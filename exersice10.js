// dado a un número, mostrar una escalera con escalones de "[-]" usando el número para los niveles de la 
// escalera.

// Cómo hacerlo:
/*
- Funcion que reciba un número
- recorrer el numero de escaleras
- en cada iteración pintar los escalones de ese nivel
-haciendoun bucle desde 1 hasta el nivel en el que estamos
*/

function escalera(numero){
    let escalera_completa = "";

    for (let nivel = 1;nivel <= numero;nivel++){
        let escalones = "";
        for (let escalon = 1; escalon <= nivel; escalon ++){
            escalones += "[-]";

        }
        escalera_completa += escalones + '\n';
    }
    return escalera_completa;
}

console.log(escalera(1  ));