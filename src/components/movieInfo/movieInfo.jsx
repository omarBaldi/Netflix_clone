import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Styles from './movieInfo.module.scss';

export default function MovieInfo(props) {
    const movieID = props.match.path.split('/').pop();

    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_TMDB_BASE_URL}/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
            })
            const { title, tagline, overview, poster_path, release_date} = response.data;
            setMovieInfo(response.data);
        })()
    })

    return (
        <div className={Styles.movieSelected}>
            {
                movieInfo && 
                <div>
                    <p>{movieInfo.title}</p>
                    <p>{movieInfo.tagline}</p>
                    <p>{movieInfo.overview}</p>
                    <p>{movieInfo.release_date}</p>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt="" />
                </div>
            }
        </div>
    )
}
