import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'te8PXGDLuAOjYpyEjzPYNidXjJY6SGhi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

    constructor() {

        super()

        this.state = {
            reviews: []
        }
    }
    
    componentDidMount() {
        fetch(URL)
          .then(response => response.json())
          .then(data => {
            this.setState({ reviews: data.results })
          })
      }
    
      render() {
        return <div className='latest-movie-reviews'>
            {/* <button onClick={this.fetchLatestReviews} >Get Latest Reviews</button> */}
            <MovieReviews  reviews={this.state.reviews} />
        </div>
      }
}



export default LatestMovieReviewsContainer