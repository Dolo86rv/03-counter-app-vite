import React from 'react'
import { CounterApp } from './counterApp'
import { FirstComponent } from './firstComponent'


export const App = () => {
    return (
        <>
            <FirstComponent title='Hi, I am Dolores' subtitle={123} />
            <CounterApp value={100} />
        </>
    )
}
