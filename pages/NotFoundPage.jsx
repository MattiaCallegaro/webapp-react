import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="d-flex flex-column align-items-center justufy-content-center">
            <h2>Page non found</h2>
            <p className='mt-3'>Ci dispiace pagina non trovata</p>
            <Link to="/" className='btn btn-primary'>Torna alla homepage</Link>
        </div>
    )
}

export default NotFoundPage