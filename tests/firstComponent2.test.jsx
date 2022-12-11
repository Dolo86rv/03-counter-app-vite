import { getByRole, render, screen } from '@testing-library/react'
import { FirstComponent } from '../src/firstComponent'

describe('Pruebas en <FirstComponent />', () => { 
    
    const title = 'Hi, I am Dolores'
    const subtitle = 'Soy un subtitulo'
    
    test('debe de hacer match con el snapshot', () => { 
        
        const { container } = render( <FirstComponent title={title} />)
        expect( container ).toMatchSnapshot()
    })

    test('debe de mostrar el mensaje Hi, I am Dolores', () => { 
        
        render(<FirstComponent  title={title}/>)
        expect(screen.getByText(title)).toBeTruthy()

    })

    test('debe de mostrar el titulo en un h1', () => {

        render(<FirstComponent  title={title}/>)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)

    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        render(
            <FirstComponent  
                title={title}
                subtitle={subtitle}
            />)
        expect(screen.getAllByText(subtitle).length).toBe(1)
     })
})