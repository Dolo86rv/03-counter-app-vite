import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {
    
    const [counter, setCounter] =useState(value)

    const handleRest = (event) => {
        setCounter(counter - 1)
    }
    const handleAdd = (event) => {
        setCounter(counter + 1)
    }

    const handleReset = (event) => {
        setCounter(value)
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h2>{value}</h2>
            <h2>{ counter }</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRest}>-1</button>
            <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 'No es un numero'
}