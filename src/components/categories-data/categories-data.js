import React,{useState,useEffect} from 'react';
import axios from 'axios';


const data = (Component,MovieData) => {
    const CategoriesData = () => {
        const [data,setData] = useState([]);
        useEffect(() => {
            const getMoviesData = async() => {
                const result = await axios.get(MovieData)
                setData(result.data.results)
            }
            getMoviesData()
        },[setData])
        return(
            <Component data = {data} />
        )
    }
    return CategoriesData;
}

export default data