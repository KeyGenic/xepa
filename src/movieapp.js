import React from "react"
import Categories from "./components/categories-tab/categories-tab.components"
import Hero from "./components/hero/hero.components";
import Trending from './components/Trending/trending.components'
import { useState } from "react"
import TopRated from "./components/top-rated/top-rated.components";
import NowPlaying from "./components/now-playing/now-playing.components";
import Upcoming from "./components/upcoming/upcoming.components";

const MovieApp = () => {
    const [value,setValue] = useState(0)
return(
    <div id = 'app'>
        <div id = 'hero-section'>
        <Hero/>
        </div>
        <div id = 'categories'>
        <Categories value = {value} setValue = {setValue} />
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
        return <NowPlaying/>
    }else if(val === 3){
        return <Upcoming/>
    }else if (val === 'action'){
        return <h1>'action</h1>
    }else if (val === 'animation'){
        return <h1>'animation</h1>
    }else if (val === 'crime'){
        return <h1>crime</h1>
    }else if (val === 'horror'){
        return <h1>'horror</h1>
    }else if (val === 'mystery'){
        return <h1>'Mystery</h1>
    }
    else{
        return <Trending/>
    }
}


export default MovieApp