import { Button, TextField } from '@mui/material'
import React from 'react'
import { Form } from './sign-up.styles'

function SignUp() {
    return (
       <Form>
            <h1>Create Account</h1>
            <div className = 'inputs'>
            <TextField id="standard-basic" label="Name" variant="standard" style = {{marginBottom:'15px'}}  />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" style = {{marginTop:'15px'}} />
            </div>
            <Button variant = 'contained'style= {{background:'#FF9300'}} >Sign Up</Button>
        </Form>
    )
}

export default SignUp
