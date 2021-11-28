import React from 'react';
import axios from 'axios';
import 'babel-polyfill'
import { useEffect,useState } from 'react';
import { Button } from '@mui/material';

export const TrailerBtn = ({id}) => {
    const [videoKey,setVideoKey] = useState([])
    useEffect(() => {
        let apiKey = `cc65c8449d31408a45621d9ff608f031`;
        const getResVideo = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
            setVideoKey(result.data.results)
        }
        getResVideo()
    },[setVideoKey])
    let ytKey;
    function getYtVideoKey(){
        videoKey.map(({name,key}) => {
            if(name === 'Official Trailer'){
            ytKey = key
            }
        })
    }
    getYtVideoKey()
    return(
        <Button variant="contained" className = 'hero-btn' style ={{background:'#FF9300'}}><a style = {{textDecoration:'none',color:'inherit'}} href = {`https://www.youtube.com/watch?v=${ytKey}`} target = '_blank'>Trailer</a></Button>
    )
}