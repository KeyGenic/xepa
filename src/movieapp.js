import React from "react"
import Categories from "./components/categories-tab/categories-tab.components"
import Hero from "./components/hero/hero.components";
import Trending from './components/Trending/trending.components'
import { useState } from "react"
import TopRated from "./components/top-rated/top-rated.components";

const MovieApp = () => {
    const [value,setValue] = useState(0)
return(
    <div id = 'app'>
        <div id = 'hero-section'>
        <Hero/>
        </div>
        <div id = 'categories'>
        <Categories value = {value} setValue = {setValue}/>
        {categories(value)}
        </div>
    </div>
    )
}

function categories(val){
    if(val === 0){
        return <Trending/>
    }else if(val === 1){
        return <TopRated/>
    }else if(val === 2){
        return <h1>Latest</h1>
    }else if(val === 3){
        return <h1>Now Playing</h1>
    }else if(val === 4){
        return <h1>Upcoming</h1>
    }
    else{
        return <h1>trend</h1>
    }
}

export default MovieApp