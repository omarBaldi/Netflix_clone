import React, {} from 'react';
import Styles from './movieCard.module.scss';
import { Link, Route } from 'react-router-dom';
import MovieSelected from '../movieInfo/movieInfo';

export default function MovieCard({ id, title, poster_path }) {
    return (
        <div>
            <Link to={`/movie/${id}`}>
                <img 
                    className={Styles.movie}
                    alt=""
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                />
            </Link>
            <Route exact path={`/movie/${id}`} component={MovieSelected} />
        </div>
    )
}
