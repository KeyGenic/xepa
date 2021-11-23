import styled from 'styled-components';
import myImg from '../../assets/spider-man nwh.jpg'

export const MovieBg = styled.div`
    background-image:linear-gradient(rgba(5,5,5,0.9),rgba(10,10,10,0.5)),url(${myImg});
    background-position:center;
    height:100vh;
    background-size:cover;
`