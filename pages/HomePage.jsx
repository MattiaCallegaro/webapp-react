
import axios from 'axios'
import FilmCard from '../components/FilmCard'
import { useState, useEffect } from 'react'


const HomePage = () => {
    //creo la variabile di stato film
    const [films, setFilms] = useState([])

    const FetchFilms = () => {
        axios.get('http://127.0.0.1:3000/api/films').then((resp) => {
            setFilms(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    };
    useEffect(FetchFilms, []);

    return (
        <>
            <h1 className='text-primary'>BoolFlix</h1>
            <h2>
                <i>The nerdest film community</i>
            </h2>
            <div className="row gy-4">
                {films && films.map((film) => {
                    return <FilmCard film={film} key={`film-${film.id}`} />
                })}
            </div>
        </>
    )
}

export default HomePage