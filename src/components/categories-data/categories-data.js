import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Pagination } from '@mui/material'
import { Movies} from '../../movies.styles'
import { GenreListMovies } from '../genre-lists/genre-lists.components'



function CategoriesMovie({type,media,time,genresNum}) {
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1)
    let api = `https://api.themoviedb.org/3/${type}/${media}/${time}?api_key=cc65c8449d31408a45621d9ff608f031${genresNum}&language=en-US&page=${page}`
    useEffect(() => {
        const getMoviesData = async() => {
            const result = await axios.get(api)
            setData(result.data.results)
        }
        getMoviesData()
        return () => {
            console.log('clean up')
        }
    },[page])
    const handleChange = (event,page) => {
        setPage(page)
    }
    return (
        <Movies>
            {
                data.map(({title,id,vote_average,poster_path}) => {
                    return    <Card sx={{ maxWidth: 345 }} key = {id}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="200"
                      image={`https://image.tmdb.org/t/p/original${poster_path}`}
             
                    />
                    <CardContent>
                      <h3>{title}</h3>
                      <p className = 'rating'>
                    {vote_average}
                    </p>
                    <GenreListMovies id = {id}/>
                    </CardContent>
                  </Card>
                })
            }
            <Pagination count={11} page ={page} variant="outlined" color="primary" onChange={handleChange}  />
        </Movies>
        
    )
}

export default CategoriesMovie
