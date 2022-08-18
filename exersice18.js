// Dado un numero, mostrar todos sus numero divisores

function divisor(num,posible_divisor) {
    if(num%posible_divisor === 0){
        return posible_divisor;
    }
    return false;
}

function mostrarDivisores(num){
    for(let i =1; i <= num; i++) {
        let esDivisor = divisor(num,i);
        if(esDivisor) console.log(esDivisor);
}
}
mostrarDivisores(20);