import { getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones'


describe('Prueba en 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => { 
        const testuser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(testuser).toEqual(user)

    })

    test('getUsuarioActivo debe retornar un objeto', () => { 
        
        const nombre = 'Dolores'
        
        const user = getUsuarioActivo(nombre)

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})