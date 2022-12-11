import { render } from '@testing-library/react'
import { FirstComponent } from '../src/firstComponent'

describe('Pruebas en <FirstComponent />', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
        
        const title = 'Hi, I am Dolores'

        const { container } = render( <FirstComponent title={title} />)

        expect( container ).toMatchSnapshot()


    })

    test('debe de mostrar el titulo en un h1', () => { 

        const title = 'Hi, I am Dolores'
        const { container, getByText, getByTestId } = render( <FirstComponent title={title} />)
        expect(getByText(title)).toBeTruthy()

        expect(getByTestId('test-title').innerHTML).toBe(title)

        //const h1 = container.querySelector('h1')
        //expect(h1.innerHTML).toBe(title)
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hi, I am Dolores'
        const subtitle = 'Soy un subtitulo'
        const { getByText } = render( 
            <FirstComponent 
                title={title}
                subtitle={subtitle} 
        />)
        expect(getByText(subtitle)).toBeTruthy()
    })
})