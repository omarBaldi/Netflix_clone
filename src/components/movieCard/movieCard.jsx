import React from 'react';
import Styles from './movieCard.module.scss';
import { Link } from 'react-router-dom';

export default function MovieCard({ id, backdrop_path }) {
    return (
        <div>
            <Link to={`/movie/${id}`}>
                <img 
                    className={Styles.movie}
                    alt=""
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                />
            </Link>
        </div>
    )
}
