import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './moviesRow.module.scss';


export default function MoviesRow({ title, url }) {

    const [rowMovies, setRowMovies] = useState([]);

    useEffect(async () => {
        const response = await axios({
            method: 'GET',
            url
        });
        const { page, results, total_pages } = response.data;
        setRowMovies(results);
    }, []);

    return (
        <div>
            <h2 className={Styles.row__title}>{title}</h2>
            <div className={Styles.movies__row}>
                {
                    rowMovies.map((movie, index) => {
                        return (
                            <img 
                                key={index}
                                className={Styles.movie}
                                alt=""
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}
