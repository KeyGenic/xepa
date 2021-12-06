import { FormControl, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";
import {ItemHolder, Items, Logo, Nav } from "./headerbat.styles";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export const HeaderBar = () => {
  const nav = document.querySelector('#navigation');
  const html  = document.querySelector('html');
  function OpenMenu() {
    nav.style.right = '0';
    html.style.overflow = 'hidden';
  }
  function closeMenu(){
    html.style.overflowY = 'auto';
    html.style.overflowX = 'hidden';
    nav.style.right = '-100%'
  }


    return(
        <header style ={{padding:'10px',background:'#0d0d0d'}}>
        <Logo>XEPA</Logo>
        <MenuIcon style ={{color:'#FF9300',float:'right',margin:'-40px auto', fontSize:'30px'}} onClick = {OpenMenu} />
        <Nav id = 'navigation'>
          <CloseIcon style ={{color:'#FF9300',float:'right',fontSize:'30px'}} className = 'close' onClick = {closeMenu} />
            <ItemHolder>
              <Items>
              <div id = 'profile' style = {{textAlign:'center'}}>
          <AccountCircleIcon style = {{color:'#fff' , fontSize : '50px', textAlign:'center'}}/>
          </div>
                </Items>
                <Items>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl  variant="standard">
        <Input
          id="input-search"
          placeholder = 'Search'
          style = {{borderBottom:'1px solid #fff', color:'#fff'}}
          startAdornment={
            <InputAdornment position="start">
             <SearchIcon style = {{color:'#fff'}}/>
            </InputAdornment>
          }
        />
      </FormControl>
      </Box>
                </Items>
            <Items><Link to = '/sign-in'><Button variant="text" style = {{color:'#FF9300'}} onClick = {closeMenu}>Sign in</Button></Link></Items>
            <Items><Link to = '/sign-up'><Button variant="contained" style = {{background:'#FF9300'} } onClick = {closeMenu}>Sign Up</Button></Link></Items>
            </ItemHolder>
            </Nav>
        </header>
    )
}