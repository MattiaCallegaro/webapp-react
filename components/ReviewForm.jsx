import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ReviewForm = ({ movie_id, reloadReviews }) => {

    //definisco i valori iniziali della form
    const initialData = { name: "", text: "", vote: "" };
    //definisco la variabile id stato FormData
    const [formData, setFormData] = useState(initialData)

    //definizione della funzione per cambiare valore a input
    const setFieldValue = (e) => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://127.0.0.1:3000/api/films/${id}/review`, formData, { headers: { "Content-Type": "application/json" } }).then(() => {
            setFormData(initialData);
            reloadReviews();
        })
    }

    return (
        <div className='card bg-secondary text-white'>
            <div className="card-header">
                Aggiungi recensione
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group my-2">
                        <label htmlFor="" className='control-label my-2'>Name</label>
                        <input type="text" className='form-control my-2' name="name" placeholder='Nome' value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className='control-label my-2'>Vote</label>
                        <input min="0" max="5" type="number" className='form-control my-2' name="vote" placeholder='Voto' required value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className='control-label my-2'>Testo</label>
                        <textarea name="text" id="text" className='form-control my-2' value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger my-3" type='submit'>Salva recensione</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm