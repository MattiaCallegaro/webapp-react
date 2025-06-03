import React from 'react'
import { Link } from 'react-router-dom'


const FilmCard = () => {
    const id = { image, title, director, genre, relase_year, abstract } = film

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-image-top">
                    <img src={image} className='img-fluid' alt={title} />
                </div>
                <div className="card-body">
                    <h3 className='text-primary'>{title}</h3>
                    <h4>
                        <em>{director}</em>
                    </h4>
                    <Link className='btn btn-primary' to={`films/${id}`}>Dettaglio film</Link>
                </div>
            </div>
        </div>
    )
}

export default FilmCard