
import heroes from '../data/heroes';



export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );

//Tarea
//Debe de retornar un arreglo con los heroes de DC
//Lenght === 3
//toEqual al arreglo filtrado

//debe retornar un arreglo con los heroes de Marvel
//lenght === 2


