import React from "react"
import {Routes,Route} from 'react-router-dom'
import Homepage from "./pages/homepage/homepage"
import SignUp from './pages/sign-up/sign-up.components'
import {BrowserRouter as Router} from 'react-router-dom'
import SignIn from "./pages/sign-in/sign-in"
const MovieApp = () => {
return(
    <div id = 'app'>
    <Router>
        <Routes>
            <Route path = '/' element = { <Homepage/>}/>
            <Route path = '/sign-up'  element = {<SignUp/>} />
            <Route path = '/sign-in'  element = {<SignIn/>} />
        </Routes>
        </Router>
        </div>
    )
  
}




export default MovieApp