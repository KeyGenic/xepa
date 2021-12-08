import React from "react"
import {Routes,Route} from 'react-router-dom'
import Homepage from "./pages/homepage/homepage"
import SignUp from './pages/sign-up/sign-up.components'
import {BrowserRouter as Router} from 'react-router-dom'
import SignIn from "./pages/sign-in/sign-in"
import { AuthProvider } from "./components/context/context"
const MovieApp = () => {
return(
    <div id = 'app'>
    <Router>
        <Routes>
            <Route path = '/' element = { <Homepage/>}/>
            <Route path = '/sign-up'  element = {
                <AuthProvider>
            <SignUp/>
            </AuthProvider>
            } />
            <Route path = '/sign-in'  element = {
                    <AuthProvider>
            <SignIn/>
            </AuthProvider>
            } />
        </Routes>
        </Router>
        </div>
    )
  
}




export default MovieApp