import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <h1 className='text-primary'>BoolFlix</h1>
            <h2>
                <i>The nerdest film community</i>
            </h2>
            <div className="row gy-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" className='img-fluid' alt="Film" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Autore</em>
                            </h4>
                            <p>Descizione</p>
                            <Link className='btn btn-primary' to="films/1">Dettaglio film</Link>
                        </div>
                    </div>
                </div>


                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" className='img-fluid' alt="Film" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Autore</em>
                            </h4>
                            <p>Descizione</p>
                            <Link className='btn btn-primary' to="films/2">Dettaglio film</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" className='img-fluid' alt="Film" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Autore</em>
                            </h4>
                            <p>Descizione</p>
                            <Link className='btn btn-primary' to="films/3">Dettaglio film</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" className='img-fluid' alt="Film" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Autore</em>
                            </h4>
                            <p>Descizione</p>
                            <Link className='btn btn-primary' to="films/4">Dettaglio film</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" className='img-fluid' alt="Film" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Autore</em>
                            </h4>
                            <p>Descizione</p>
                            <Link className='btn btn-primary' to="films/5">Dettaglio film</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage