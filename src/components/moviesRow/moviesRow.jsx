/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './moviesRow.module.scss';
import MovieCard from '../movieCard/movieCard';


export default function MoviesRow({ title, url }) {

    const [rowMovies, setRowMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios({
                method: 'GET',
                url
            });
            const { page, results, total_pages } = response.data;
            setRowMovies(results);
        })()
    }, []); 

    return (
        <div>
            <h2 className={Styles.row__title}>{title}</h2>
            <div className={Styles.movies__row}>
                {
                    rowMovies.map((movie, index) => {
                        return (
                            <MovieCard {...movie} key={index} />
                        );
                    })
                }
            </div>
        </div>
    )
}
