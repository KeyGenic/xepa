import { TextField } from '@mui/material'
import React from 'react'

function SignUp() {
    return (
        <form action="">
            <h1>Create Account</h1>
            <div className = 'inputs'>
            <TextField id="standard-basic" label="Name" variant="standard"  />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" />
            </div>
        </form>
    )
}

export default SignUp
