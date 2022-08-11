// dado un número mostrar todos los números desde ese al 0 de 8 en 8 en una lista con giones donde cada número debe
// empezar por n°

/*
-Funcion que reciba un numero 
-Inicializar variable con encabezado
-Bucle del numero al cero
-Concatenar guion, n°, número y salto de linea
-Restar 8
-Concatenar FIN
*/

function hastaCero(num){
    let result = `Del número ${num} al 0 --- \n`;
    
    while(num > 0){

        result += `- n°${num} \n`;
        num -=8;

    }
    if(num <=0){
        result += "- n° 0 \n";
    }
    result += "FIN";
    return result;
}

console.log(hastaCero(100));