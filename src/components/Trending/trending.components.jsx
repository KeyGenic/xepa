import { Card, CardContent, CardMedia, Pagination } from '@mui/material'
import React from 'react'
import { Movies} from '../../movies.styles'
import data from '../categories-data/categories-data'
import { GenreListMovies } from '../genre-lists/genre-lists.components'

function Trending({data}) {
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
            <Pagination count={10} variant="outlined" />
        </Movies>
    )
}

export default data(Trending,`https://api.themoviedb.org/3/trending/movie/day?api_key=cc65c8449d31408a45621d9ff608f031&language=en-US&page=1`)
