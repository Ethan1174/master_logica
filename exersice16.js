// enunciado
/*
Dada una cadena de texto, devolver cuantas vocales (a,e,i,o,u) tiene

Ejemplos:
vocales(ethanjedutun) Devuelve: 6


Como hacerlo:
- Crear una funcion que reciba el texto
- Metodo match con expresion regular
- Devolver resultado
*/

function vocales(text){
    let coincidencias = text.match(/[aeiou]/gi);

    return coincidencias ? coincidencias.length : 0;

}

console.log('Número de vocales',vocales("mnbvcxcvbnm"));