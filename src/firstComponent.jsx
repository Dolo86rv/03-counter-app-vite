import React from 'react'
import PropTypes from 'prop-types'

const newMessage = {
    message: 'Hola',
    title: 'Dolores'
}

const getNombre = (nombre) =>{
    return nombre 
}

export const FirstComponent = ({ title, subtitle, name }) => {
    
    return (
        <>
            <p>Welcome!!!</p>
            <code>{ JSON.stringify(newMessage)}</code>
            <p>{getNombre('Valentina')}</p>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
        
    )
}

FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}
FirstComponent.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'Dolores Rodriguez'
}