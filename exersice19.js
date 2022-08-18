// dado un array de objetos de peliculas (titulo, director,vista)
// mostrar todas las peliculas indicando cual has visto y cual no

// misPeliculas(peliculas);

function misPeliculas(){
    for(pelicula of peliculas){

        let mostrar = `"${pelicula.title} de ${pelicula.director}"`;

        if(pelicula.vista){
            console.log("Ya has visto:", mostrar);
        }else{
            console.log("Te falta por ver:", mostrar);
        }
    }
    return peliculas;

}

const peliculas = [
    {
        title:'El señor de los anillos',
        director:'Peter Jackson',
        vista:true
    },
    {
        title:'Iron Man',
        director:'MARVEL',
        vista:true
    },
    {
        title:'Maldición',
        director:'Jacobo pedro',
        vista:false
    },
    {
        title:'Jefe en pañales 2',
        director:'Pedro gomez',
        vista:false
    }
];

misPeliculas(peliculas);