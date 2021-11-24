import { Button } from '@mui/material';
import React from 'react';
import { HeaderBar } from '../headerbar/headerbar.components';
import { GenreHeroContainer, GenreList, HeroBtn, HeroInfo, MovieBg } from './hero-styles';
import AddIcon from '@mui/icons-material/Add';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
  } from 'swiper';

export const Hero = () => {
    SwiperCore.use([Pagination])
    return(
        <div>
            <HeaderBar/>
        <Swiper pagination={{
  "clickable": true
}}>
            <SwiperSlide>
            <MovieBg>
            <HeroInfo>
                <h1>Spider-man:now way home</h1>
                <GenreHeroContainer>
                    <GenreList>
                       Action
                    </GenreList>
                    <GenreList>
                        Adventure
                    </GenreList>
                    <GenreList>
                        Science Fiction
                    </GenreList>
                    <div style = {{width:'1px',height:'20px',background:'#fff',transform:'translate(-5px,10px)'}}></div>
                    <GenreList id = 'duration'>
                        2h 30m
                    </GenreList>
                </GenreHeroContainer>
                <p className = 'rating'>
                    10
                </p>
                <HeroBtn>
                <Button variant="contained" className = 'hero-btn' style ={{background:'#FF9300'}}>Trailer</Button>
                    <Button variant = 'outlined' className = 'hero-btn'style ={{borderColor:'#FF9300'}}>View Info</Button>
                    <Button variant="text" className = 'hero-btn'><AddIcon/>WatchLists</Button>
                </HeroBtn>
            </HeroInfo>
        </MovieBg>
            </SwiperSlide>
            <SwiperSlide>
            <MovieBg>
            <HeroInfo>
                <h1>Spider-man:now way home</h1>
                <GenreHeroContainer>
                    <GenreList>
                       Action
                    </GenreList>
                    <GenreList>
                        Adventure
                    </GenreList>
                    <GenreList>
                        Science Fiction
                    </GenreList>
                    <div style = {{width:'1px',height:'20px',background:'#fff',transform:'translate(-5px,10px)'}}></div>
                    <GenreList id = 'duration'>
                        2h 30m
                    </GenreList>
                </GenreHeroContainer>
                <p className = 'rating'>
                    10
                </p>
                <HeroBtn>
                <Button variant="contained" className = 'hero-btn' style ={{background:'#FF9300'}}>Trailer</Button>
                    <Button variant = 'outlined' className = 'hero-btn'style ={{borderColor:'#FF9300'}}>View Info</Button>
                    <Button variant="text" className = 'hero-btn'><AddIcon/>WatchLists</Button>
                </HeroBtn>
            </HeroInfo>
        </MovieBg>
            </SwiperSlide>
        </Swiper>
        </div>
    )
} 