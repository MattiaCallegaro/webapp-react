import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewsCard from '../components/ReviewsCard';
import axios from 'axios';

const FilmPage = () => {

    const { id } = useParams();

    const [film, setFilm] = useState({});

    const FetchFilms = () => {
        axios.get(`http://localhost:5173/films${id}`).then((resp) => {
            setFilm(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    };
    useState(FetchFilms, []);

    return (
        <>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={film.image} className='img-fluid' alt="Film" />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <h1>{film.title}</h1>
                    <h3>{film.director}</h3>
                    <p>{film.text}</p>
                </div>
            </div>

            <div className="row gy-4 my-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h3>Community reviews</h3>
                    </div>
                </div>
                {film.reviews.map((review) => {
                    <div className="row gy-3" key={`rewiew-${review.id}`}>
                        <ReviewsCard review={review} />
                    </div>
                })}
            </div>
        </>
    )
}

export default FilmPage