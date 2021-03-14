/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './moviesRow.module.scss';
import MovieCard from '../movieCard/movieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

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
                <Swiper 
                    spaceBetween={20} 
                    slidesPerView={4} 
                    freeMode={true} 
                    grabCursor={true}
                    navigation
                    autoplay={{ delay: 3000 }}
                    //navigation={{ nextEl: nextButton, prevEl: prevButton }}
                >
                    {
                        rowMovies.map((movie, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <MovieCard {...movie} key={index} />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}
