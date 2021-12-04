import React from 'react'
import CategoriesMovie from '../categories-data/categories-data'

function Action() {
    return (
        <CategoriesMovie type = 'discover' media = 'movie' time = '' genresNum = {`&with_genres=${28}`}/>
    )
}

export default Action
