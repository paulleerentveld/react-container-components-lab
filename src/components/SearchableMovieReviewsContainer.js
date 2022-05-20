import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'te8PXGDLuAOjYpyEjzPYNidXjJY6SGhi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + `&query=`;

            //https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=te8PXGDLuAOjYpyEjzPYNidXjJY6SGhi
// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    constructor() {

        super()

        this.state = {
            reviews: [], 
            searchTerm: ""

        }
    }

    

    fetchSearchReviews = (event) => {
        event.preventDefault()
        fetch(URL+this.state.searchTerm)
          .then(response => response.json())
          //.then(data => console.log(data.results))
          .then(data => 
            this.setState({ reviews: data.results }))
      }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }
    
      render() {
          // return <BookList books={this.state.books} />
        return (
            <div>
                <form onSubmit={event => this.fetchSearchReviews(event)}>
                    <input type='text' onChange={event => this.handleChange(event)} value={this.searchTerm}></input>
                    <input type='submit' ></input>
                </form>
                <div className='searchable-movie-reviews'>
                    <MovieReviews  reviews={this.state.reviews} />
                </div>
            </div>
        )
      }
}

export default SearchableMovieReviewsContainer