import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";
import { BtnLists, Btns, Logo, Nav } from "./headerbat.styles";

export const HeaderBar = () => {
    return(
        <header>
        <Logo>XEPA</Logo>
        <Nav>
            <Btns>
                <BtnLists><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <span class="material-icons" style = {{transform:'translate(20px,-5px)'}}>search</span>
        <TextField id="input-with-sx" label="Search" variant="standard" style = {{  textIndent: '25px'}} />
      </Box></BtnLists>
            </Btns>
            <BtnLists><Button variant="text" style = {{color:'#FF9300'}}>Sign in</Button></BtnLists>
            <BtnLists><Button variant="contained" style = {{background:'#FF9300'}}>Sign Up</Button></BtnLists>
            </Nav>
        </header>
    )
}