
import { Link } from 'react-router-dom'
import axios from 'axios'
import FilmCard from '../components/FilmCard'
import { useState, useEffect } from 'react'

const HomePage = () => {
    //creo la variabile di stato film
    const [films, setFilm] = useState([])

    const FetchFilms = () => {
        axios.get('http://127.0.0.1:3000/api/films').then((resp) => {
            setFilm(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    };
    useState(FetchFilms, []);

    return (
        <>
            <h1 className='text-primary'>BoolFlix</h1>
            <h2>
                <i>The nerdest film community</i>
            </h2>
            <div className="row gy-4">
                {films.map((film) => {
                    return <FilmCard film={film} key={`film-${film.id}`} />
                })}
            </div>
        </>
    )
}

export default HomePage