import React, { useState } from 'react';

function ReviewList() {
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);

    const addReview = () => {
        if (review.trim() !== '') {
            setReviews([...reviews, review]);
            setReview(''); // Clear the input field
        }
    }

    const inputValueChange = (event) => {
        setReview(event.target.value);
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter a review" 
                value={review} 
                onChange={inputValueChange} 
            />
            <button className="btn btn-dark btn-sm" onClick={addReview}>Add Review</button>
            <ul>
                {reviews.map((rev, index) => (
                    <li key={index}>{rev}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReviewList;
