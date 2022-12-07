describe('Pruebas en <DemoComponent />', () => { 
    test('Esta prueba no debe de fallar', () => {

        // 1. Inicializacion
        const message = 'Hola mundo'
    
        // 2. estimulo
        const message2 = message.trim() 
    
        //Observar el comportamiento...esperado
        expect( message ).toBe( message2 )
        
    })
})

