import React from 'react';
import { Button } from '@mui/material';
import { HeaderBar } from '../headerbar/headerbar.components';
import { HeroBtn, HeroInfo, MovieBg } from './hero-styles';
import AddIcon from '@mui/icons-material/Add';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
  } from 'swiper';
import popularData from '../getPopularMovies/getPopularMovies';
import { GenreListMovies } from '../genre-lists/genre-lists.components';
import { TrailerBtn } from '../trailer-btn/trailer-btn.components';

const Hero = ({data}) => {
    SwiperCore.use([Pagination])
    return(
        <div>
            <HeaderBar/>
        <Swiper pagination={{
  "clickable": true
}}>
    {
        data.slice(0,5).map(({title,vote_average,id,genre_id,backdrop_path}) => {
          return <div key  = {id}>
                    <SwiperSlide key = {id}>
            <MovieBg bg = {`https://image.tmdb.org/t/p/original${backdrop_path}`}>
            <HeroInfo>
                <h1>{title}</h1>
                <GenreListMovies id = {id}/>
                <p className = 'rating'>
                    {vote_average}
                </p>
                <HeroBtn>
                    <TrailerBtn id = {id}/>
                    <Button variant = 'outlined' className = 'hero-btn'style ={{borderColor:'#FF9300'}}>View Info</Button>
                    <Button variant="text" className = 'hero-btn'><AddIcon/>WatchLists</Button>
                </HeroBtn>
            </HeroInfo>
        </MovieBg>
            </SwiperSlide>
              </div>
          
        })
    }
          
        </Swiper>
        </div>
    )
} 

console.log(name)

export default popularData(Hero,`https://api.themoviedb.org/3/movie/popular?api_key=cc65c8449d31408a45621d9ff608f031&language=en-US`)