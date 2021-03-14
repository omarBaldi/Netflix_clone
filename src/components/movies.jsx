import React from 'react';
import MoviesRequests from '../movieRequests';
import MoviesRow from './moviesRow/moviesRow';

export default function Movies({ match }) {
    console.log(match);
    return (
        <div>
            <MoviesRow title={MoviesRequests.POPULAR_MOVIES.currentTitle} url={MoviesRequests.POPULAR_MOVIES.currentURL} />
            <MoviesRow title={MoviesRequests.TOP_RATED.currentTitle} url={MoviesRequests.TOP_RATED.currentURL} />
            <MoviesRow title={MoviesRequests.TRENDING_NOW.currentTitle} url={MoviesRequests.TRENDING_NOW.currentURL} />
        </div>
    )
}
