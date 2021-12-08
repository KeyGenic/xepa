import { Button, TextField } from '@mui/material'
import React,{useRef} from 'react'
import { Form } from './sign-up.styles'
import { useAuth } from '../../components/context/context'
import 'babel-polyfill';
import { useNavigate } from 'react-router';


function SignUp() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef()
    const {signUp} = useAuth();
    let navigate = useNavigate('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(emailRef.current.value,passwordRef.current.value,nameRef.current.value);
        navigate('/')
    }

   
    return (
       <Form onSubmit = {handleSubmit}>
            <h1>Create Account</h1>
            <div className = 'inputs'>
            <TextField id="standard-basic" type= 'text' label="Name" variant="standard" style = {{marginBottom:'15px'}} inputRef = {nameRef} required />
            <TextField id="standard-basic" type = 'email' label="Email" variant="standard" inputRef = {emailRef} required />
            <TextField id="standard-basic" type = 'password' label="Password" variant="standard" style = {{marginTop:'15px'}} inputRef = {passwordRef} required />
            </div>
            <Button variant = 'contained'style= {{background:'#FF9300'}} type = 'submit'>Sign Up</Button>
      
        </Form>
    )
}

export default SignUp
