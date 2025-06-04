import React from 'react'
import { Link } from 'react-router-dom'


const FilmCard = ({ film }) => {


    return (
        <div className="col-12 col-md-6 col-lg-4" key={film.id}>
            <div className="card bg-secondary" style={{ height: '45rem' }} >
                <div className="card-image-top">
                    <img src={film.image} className='img-fluid' alt={film.title} />
                </div>
                <div className="card-body">
                    <h3 style={{ color: '#e50914', fontWeight: 'bold', fontSize: "1.5rem" }}>{film.title}</h3>
                    <h4>
                        <em style={{ color: '#e50914', fontSize: "1.5rem" }}>{film.director}</em>
                    </h4>
                    <Link className='btn btn-danger' to={`/films/${film.id}`}>Dettaglio film</Link>
                </div>
            </div>
        </div>
    )
}

export default FilmCard