/*
Dado un numero, mostrar los numeros de 1 hasta el numero
pero para multiplos de tres imprimir "buzz" en lugar del numero
y para los multiplos de cinco imprimir "lightyear".
para multiplos de tres y cinco imprimir "Buzzlightyear" 
*/

function buzz(num){
    let resutl = "";
    if (num % 3 === 0 && num % 5 === 0){
        resutl = 'Buzzlightyear';
    }else if (num % 3 === 0){
        resutl = "buzz";
    }else if (num % 5 === 0){
        resutl = "lightyear";
    }else{
        return num;
    }
    return resutl;
}

function imprimir(num){
    for (let i=1; i<=num; i++){
        console.log(buzz(i));
    }
}

imprimir(100);