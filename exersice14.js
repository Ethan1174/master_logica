// Dado un string y un número, repetir el string tantas veces como el número indique

// ejemplos
// repiteme("ethan", 2)

// devuelve:
// ethanethan

function repiteme(str, number){
    let result = "";

    for (let i = 0; i < number; i++) {
        result += str + ', ';
    }

    return result;
}

console.log(repiteme("ethan", 8));  

// funcion prototipo

String.prototype.repiteme = function(number){
    let result = "";

    for (let i = 0; i < number; i++) {
        result += this + ', ';
    }

    return result;
}
console.log("ethan".repiteme(20));