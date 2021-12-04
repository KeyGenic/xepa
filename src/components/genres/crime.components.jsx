import React from 'react'
import CategoriesMovie from '../categories-data/categories-data'

function Crime() {
    return (
        <CategoriesMovie type = 'discover' media = 'movie' time = '' genresNum = {`&with_genres=${80}`}/>
    )
}

export default Crime