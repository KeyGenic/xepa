import React from "react";
import Categories from "../../components/categories-tab/categories-tab.components"
import Hero from "../../components/hero/hero.components";
import Trending from '../../components/Trending/trending.components'
import { useState } from "react"
import TopRated from '../../components/top-rated/top-rated.components'
import NowPlaying from "../../components/now-playing/now-playing.components";
import Upcoming from "../../components/upcoming/upcoming.components";
import Action from "../../components/genres/action.components";
import AnimationGenre from "../../components/genres/animation.components";
import Crime from "../../components/genres/crime.components";
import Mystery from "../../components/genres/mystery.components";
import Horror from "../../components/genres/horror.components";


const Homepage = () => {
    const [value,setValue] = useState(0)
    return(
        <div className = 'browse-movies'>
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
        return <Action/>
    }else if (val === 'animation'){
        return <AnimationGenre/>
    }else if (val === 'crime'){
        return <Crime/>
    }else if (val === 'horror'){
        return <Horror/>
    }else if (val === 'mystery'){
        return <Mystery/>
    }
    else{
        return <Trending/>
    }
}

export default Homepage