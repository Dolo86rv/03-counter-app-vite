import { render } from '@testing-library/react'
import { FirstComponent } from '../src/firstComponent'

describe('Pruebas en <FirstComponent />', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
        
        const subtitle = 'Hola, soy Goku'

        render( <FirstComponent subtitle={subtitle} />)

    })
})