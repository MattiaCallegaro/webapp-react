import React from 'react'
import FilmCard from '../components/FilmCard'
import ReviewsCard from '../components/ReviewsCard'

const FilmPage = () => {
    return (
        <>
            <div className='row'>
                <FilmCard />
            </div>

            <div className="row gy-4 my-4">
                <ReviewsCard />
            </div>
        </>
    )
}

export default FilmPage