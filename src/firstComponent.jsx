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
            <h1>Welcome!!!</h1>
            <code>{ JSON.stringify(newMessage)}</code>
            <p>{getNombre('Valentina')}</p>
            <p>{ title} {subtitle}</p>
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