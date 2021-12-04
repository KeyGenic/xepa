import React from 'react'
import CategoriesMovie from '../categories-data/categories-data'

function AnimationGenre() {
    return (
        <CategoriesMovie type = 'discover' media = 'movie' time = '' genresNum = {`&with_genres=${16}`}/>
    )
}

export default AnimationGenre
