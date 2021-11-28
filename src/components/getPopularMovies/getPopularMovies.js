import React from 'react'
import axios from 'axios';
import 'babel-polyfill';

const popularData = (NewComponent,data) => {
class GetPopularMovies extends React.Component{
state = {
    data : []
}
componentDidMount(){
    const getPopularMovies = async () => {
        const result = await axios.get(data);
        this.setState({
            data:result.data.results
        }) 
    }
    getPopularMovies();
}
render(){
    return(
        <NewComponent data = {this.state.data}/>
    )
}
}
return GetPopularMovies
}

export default popularData

