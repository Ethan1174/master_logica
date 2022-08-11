// Dado a un número entero, inviertelo y devuelve de nuevo el entero.

// ejemplo numeroInvertido(97) = result = 79

function invertirEntero(number){
    let  invertido = parseInt
                    (
                        number
                        .toString()
                        .split('')
                        .reverse()
                        .join('') 
                    ) * Math.sign(number);
    return invertido;
} 
console.log('El número invertir es:',invertirEntero(-58));