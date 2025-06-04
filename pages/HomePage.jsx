
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
            <h2>
                <i style={{ color: '#e50914', fontWeight: 'bold', fontSize: "1.8rem" }}>The nerdest film community</i>
            </h2>
            <div className="row gy-4 my-2">
                {films && films.map((film) => {
                    return <FilmCard film={film} key={`film-${film.id}`} />
                })}
            </div>
        </>
    )
}

export default HomePage