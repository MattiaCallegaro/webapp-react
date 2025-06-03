import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsCard from '../components/ReviewsCard';
import axios from 'axios';

const FilmPage = () => {

    const { id } = useParams();

    const [film, setFilm] = useState({});

    const FetchFilms = () => {
        axios.get(`http://127.0.0.1:3000/api/films/${id}`).then((resp) => {
            setFilm(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    };
    useEffect(FetchFilms, []);

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 ">
                    <div className="card ">
                        <div className="card-image-top">
                            <img src={film.image} alt={film.title} className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>{film.title}</h3>
                            <h4><em>{film.author}</em></h4>
                            <p>{film.abstract}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gy-4 my-5">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <h3>Le recensioni della community</h3>
                    </div>
                </div>
                {film.reviews?.map((review) => (
                    <div key={`review-${review.id}`}>
                        <ReviewsCard review={review} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default FilmPage