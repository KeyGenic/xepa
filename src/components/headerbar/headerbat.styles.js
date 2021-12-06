import styled from 'styled-components';

export const Logo = styled.h1`
    color:#FF9300;
    font-family: 'Alfa Slab One', cursive;
`
export const Nav = styled.nav`
background:#0d0d0d;
height:100vh;
width:50vw;
position:absolute;
top:0;
right:-100%;
z-index:2;
transition:0.5s;
a{
    text-decoration:none
}
.MuiInput-underline{
    &::after{
        border-bottom: 2px solid #FF9300 !important;
    }
}
` 

export const ItemHolder = styled.ul`
list-style:none;
margin:20px;
padding-top:50px
` 

export const Items = styled.li`
padding-top:10px
` 