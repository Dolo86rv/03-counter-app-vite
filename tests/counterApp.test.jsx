import { CounterApp } from '../src/counterApp'
import { render, screen, fireEvent } from '@testing-library/react'


describe('pruebas en el <CounterApp />', () => {
    
    const initialValue = 10

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <CounterApp  value={initialValue}/>)
        expect( container ).toMatchSnapshot()

    })

    test('debe de mostrar el valor si le manamos 100', () => {

        render(<CounterApp value={100} />)
        expect(screen.getAllByText(100)).toBeTruthy()
    })

    test('debe incgrementar con el boton +1', () => { 

        render(<CounterApp value={ initialValue } />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy()
    })

    test('debe incgrementar con el boton +1', () => { 

        render(<CounterApp value={ initialValue } />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy()
    })

    test('debe de funcionar el boton de Reset', () => { 
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))


        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}))   
        expect(screen.getAllByText(initialValue)).toBeTruthy()

    })
 })