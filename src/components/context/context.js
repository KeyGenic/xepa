import React ,{useContext,useEffect,useState}from "react";
import { auth } from "../../firebase";

export const Context = React.createContext('');
export const Provider = Context.Provider;

export const useAuth = () => {
    return useContext(Context)
}



export const AuthProvider = (({children}) => {
const [currentUser,setCurrentUser] = useState('');

function signUp(email,password,name){ 
    return auth.createUserWithEmailAndPassword(email,password)
    .then(function(result) {
        return result.user.updateProfile({
          displayName: name
        })
      }).catch(function(error) {
        console.log(error);
      });
}

function login(email,password){
    return auth.signInWithEmailAndPassword(email,password)
}

function logOut(){
    return auth.signOut()
}

useEffect(() => {
    const unSub = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    return unSub
},[])

const value = {
    currentUser,
    signUp,
    login,
   logOut
}

    return(
        <Context.Provider value = {value}>
            {children}
        </Context.Provider>
    ) 
})