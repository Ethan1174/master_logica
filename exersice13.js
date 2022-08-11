// dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un número que indique su tamaño

// ejemplo:
// divideArray([7,8,9,10], 2)
// devuelve:
// [[7,8],[9,10]]

// como hacerlo:
// -Crear una funcion que reciba los dos parámetros
// -Crear un array
// -Recorrer array e ir añadiendo sub-arrays

function divideArray(a_principal,elements){
    let arreglos = [];

    for (let elemento of a_principal) {
        
        let last = arreglos[arreglos.length-1];
        if(!last || last.length === elements)
        {
            arreglos.push([elemento]);
        }
        else
        {
            last.push(elemento);
        }
    }
    return arreglos;
}
console.log(divideArray([7,8,9,10,5,9,8,4,8], 3))