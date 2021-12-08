import { Button, TextField } from '@mui/material'
import React,{useRef} from 'react'
import { Form } from '../sign-up/sign-up.styles'
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../components/context/context';
import { useNavigate } from 'react-router';
import 'babel-polyfill'
import { signInWithGoogle } from '../../firebase';
function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef()
    const {login} = useAuth()
    let navigate = useNavigate('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await login(emailRef.current.value,passwordRef.current.value)
            navigate('/')
        }catch{
            alert('login failed')
        }
    }

    const googleSignIn = async (e) => {
        e.preventDefault()
        await signInWithGoogle()
        navigate('/')
    }

    return (
        <Form onSubmit = {handleSubmit}>
            <h1>Sign In to Xepa</h1>
            <div className = 'inputs'>
            <TextField id="standard-basic" label="Email" variant="standard" type = 'email' inputRef = {emailRef} />
            <TextField id="standard-basic" label="Password" variant="standard" type = 'password' style = {{marginTop:'15px'}} inputRef = {passwordRef} />
            </div>
            <Button variant = 'contained'style= {{background:'#FF9300',margin:'0 10px'}} type = 'submit' >Sign In</Button>
            <Button variant = 'contained' onClick = {googleSignIn}>Sign In with <GoogleIcon style = {{fontSize:'20px', marginLeft:'5px'}}/> </Button>
        </Form>
    )
}

export default SignIn
