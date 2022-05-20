// Code MovieReviews Here


import React from 'react';





const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map((review, index) => {
        return <div className="review" key={index}>
            <img src={ review.multimedia.src || "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" } alt={review.display_title}/>
            <h3>{ review.display_title }</h3>
            <h4>By: {review.byline} </h4>
            <h4>Date: {review.publication_date}</h4>
            <p> {review.summary_short}</p>
            <a href={review.link.url} target="_blank" rel='noopener noreferrer' >Full Review</a>
            <br></br>
        </div>
    }) }
  </div>
)

export default MovieReviews;


