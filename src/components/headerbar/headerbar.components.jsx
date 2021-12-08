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
import {useAuth } from "../context/context";
import 'babel-polyfill';

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

  const {currentUser,logOut} = useAuth()

    return(
        <header style ={{padding:'10px',background:'#0d0d0d'}}>
        <Logo>XEPA</Logo>
        <MenuIcon style ={{color:'#FF9300',float:'right',margin:'-40px auto', fontSize:'30px'}} onClick = {OpenMenu} />
        <Nav id = 'navigation'>
          <CloseIcon style ={{color:'#FF9300',float:'right',fontSize:'30px'}} className = 'close' onClick = {closeMenu} />
            <ItemHolder>
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
                  {
                    currentUser === null?  <div>
                    <Items><Link to = '/sign-in'><Button variant="text" style = {{color:'#FF9300'}} onClick = {closeMenu}>Sign in</Button></Link></Items>
            <Items><Link to = '/sign-up'><Button variant="contained" style = {{background:'#FF9300'} } onClick = {closeMenu}>Sign Up</Button></Link></Items>
            </div>:<Items><Button variant="text" style = {{color:'#FF9300'}} onClick  = {async () => await logOut()} >Log Out</Button></Items>
                  
                  }
            
            </ItemHolder>
            </Nav>
        </header>
    )
}