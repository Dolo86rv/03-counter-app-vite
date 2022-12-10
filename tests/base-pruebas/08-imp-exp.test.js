import { getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp'
import heroes from '../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un heroe por ID', () => { 
        const id = 1
        const hero = getHeroeById(id)
        
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe de retornar undefined si no existe', () => { 
        const id = 100
        const hero = getHeroeById(id)
        
        expect(hero).toBeFalsy()
    })

    test('getHeroesByOwner debe rertornar los owner DC', () => { 
        const owner = 'DC'
        const arrOwner = getHeroesByOwner(owner)

        let long = arrOwner.length

        expect(long).toBe(3)
        expect(arrOwner).toEqual([
            {"id": 1, "name": "Batman", "owner": "DC"}, 
            {"id": 3, "name": "Superman", "owner": "DC"},
            {"id": 4, "name": "Flash", "owner": "DC"}
        ])

        expect(arrOwner).toEqual(arrOwner.filter((heroe) => heroe.owner === owner ))
    })

    test('getHeroesByOwner debe rertornar los heroes de Marve', () => { 
        const owner = 'Marvel'
        const arrOwner = getHeroesByOwner(owner)

        let long = arrOwner.length

        expect(long).toBe(2)
        expect(arrOwner).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel'},
            { id: 5, name: 'Wolverine', owner: 'Marvel'}
        ])
        
        expect(arrOwner).toEqual(arrOwner.filter((heroe) => heroe.owner === owner ))
    })
})