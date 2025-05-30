import React from 'react'

const FilmPage = () => {
    return (
        <>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4">
                    <img src="https://picsum.photos/500/300" className='img-fluid' alt="Film" />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <h1>Titolo</h1>
                    <h3>Autore</h3>
                    <p>Descrizione</p>
                </div>
            </div>

            <div className="row gy-4 my-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h3>Community reviews</h3>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card p-3">
                        <p>Tetso recensione</p>
                        <p>voto</p>
                        <p>autore</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilmPage