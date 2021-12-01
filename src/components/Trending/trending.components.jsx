import React from 'react'
import CategoriesMovie from '../categories-data/categories-data'

function Trending() {
  return (
    <CategoriesMovie media = 'movie' time = 'day' type = 'trending'/>
  )
}

export default Trending

