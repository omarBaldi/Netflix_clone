import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Styles from './movieInfo.module.scss';

export default function MovieInfo(props) {

    const movieID = props.match?.params?.id;
    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_TMDB_BASE_URL}/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
            })
            setMovieInfo(response.data);
        })()
    }, [movieID])

    return (
        <div className={Styles.movieSelected}>
            {
                movieInfo && 
                <div className={Styles.movieData}>
                    <div className={Styles.movieImage}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt="" />
                    </div>
                    <div className={Styles.movieText}>
                        <p>{movieInfo.title}</p>
                        <p>{movieInfo.tagline}</p>
                        <p>{movieInfo.overview}</p>
                        <p>{movieInfo.release_date}</p>
                    </div>
                </div>
            }
        </div>
    )
}
