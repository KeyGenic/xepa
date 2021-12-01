import React,{useState,useEffect} from "react";
import { GenreHeroContainer } from "./genre-lists";
import { GenreList } from "./genre-lists";
import axios from "axios";


export function GenreListMovies({id,style}){
    const [genres,setGenres] = useState([]);
    const [duration,setDuration] = useState('');

    useEffect(() => {
        async function getMovieDetail() {
            let apiKey = `cc65c8449d31408a45621d9ff608f031`;
                const detailRes = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
            setGenres(detailRes.data.genres)
            setDuration(detailRes.data.runtime)
        }
        getMovieDetail()
    },[setGenres])
    //convert duration into hours and minutes
    const arrRuntime = []
    const convertMinToHoursAndMin = () => {
        const decimalhours = duration/60;
        const hours = Math.floor(decimalhours)
        const hoursApart = decimalhours%1;
        const mins = Math.floor(hoursApart*60);
        arrRuntime.push(hours,mins)
    }
    convertMinToHoursAndMin()
return(
    <GenreHeroContainer className = 'genrehero'>
        {
            genres.slice(0,3).map(({name,id}) => {
                return <GenreList key = {id}>
                    {name}
                </GenreList>
            })
        }
    <div style = {{width:'1px',height:'20px',background:'#fff',transform:'translate(-5px,10px)'}}></div>
    <GenreList id = 'duration'>
        {`${arrRuntime[0]}h ${arrRuntime[1]}m `}
    </GenreList>
</GenreHeroContainer>
   
)
}