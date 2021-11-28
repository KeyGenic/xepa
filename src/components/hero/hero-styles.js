import styled from 'styled-components';
import myImg from '../../assets/spider-man nwh.jpg'

export const MovieBg =  styled.div`
    background-image:linear-gradient(rgba(5,5,5,0.9),rgba(10,10,10,0.5)),url(${(props) => props.bg});
    background-position:center;
    height:100vh;
    background-size:cover;
    color:#fff;
`

export const HeroInfo = styled.div`
    position:absolute;
    top:50%;
    transform:translate(0,-50%);
    padding-left:15px;
    .rating{
        padding:5px;
        border:2px solid #FF9300;
        border-radius:5px;
        display:inline-block;
    }
`

export const HeroBtn = styled.div`
    padding-top:50px;
    .hero-btn{
        margin:10px;
        transform:translateX(-10px);
        color:#fff;
    }
`