import React from 'react'

const ReviewsCard = ({ review }) => {
    const { movie_id, name, vote, text, created_at } = review

    return (
        <div className="col-12">
            <div className="card bg-secondary p-3 text-white">
                <p>{text}</p>
                <p>{vote}</p>
                <p>{name}</p>
                <p>{created_at}</p>
            </div>
        </div>
    )
}

export default ReviewsCard