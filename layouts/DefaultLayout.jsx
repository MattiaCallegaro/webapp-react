import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

//creando il layout mi creo un componente fisso nelle diverse pagine
//outlet serve per tenere il dettaglio della pagina dentro

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className='container'>{/*le pagine*/}
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout