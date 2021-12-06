import { Button, TextField } from '@mui/material'
import React from 'react'
import { Form } from '../sign-up/sign-up.styles'
import GoogleIcon from '@mui/icons-material/Google';
function SignIn() {
    return (
        <Form>
            <h1>Sign In to Xepa</h1>
            <div className = 'inputs'>
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" style = {{marginTop:'15px'}} />
            </div>
            <Button variant = 'contained'style= {{background:'#FF9300',margin:'0 10px'}} >Sign In</Button>
            <Button variant = 'contained' >Sign In with <GoogleIcon style = {{fontSize:'20px', marginLeft:'5px'}}/> </Button>
        </Form>
    )
}

export default SignIn
