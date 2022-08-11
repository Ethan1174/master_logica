// dados dos arrays, devolver con solo los elementos comunes entre ambos

// ejemplos 
// elementosComunes([4,5,6,7], [7,8,9,7,5]) devuelve: [5,7]

// Cómo hacerlo:
// funcion que reciba dos arrays
//  filtrar array evaluando una condicion
// devolver array nuevo

function elementosComunes(a1,a2){
    const filtrado = a1.filter(elemento => {
        return a2.includes(elemento)});
    return filtrado;
}

console.log('elementos comunes:', elementosComunes([1,4,5,6,7], [7,8,9,1,7,5]  ))