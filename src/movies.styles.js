import styled from 'styled-components'

export const Movies = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:10px;
    gap:30px;
    #duration{
        display:none
    }
    .rating{
        padding:1px;
        font-size:10px;
        border:2px solid #FF9300;
        border-radius:5px;
        display:inline-block;
        float:right;
        transform:translate(8px,-20px);
        color:#FF9300;
    }
    .genrehero{
        font-size:10px;
        color:#FF9300;
    }
    .MuiPagination-ul{
        position:absolute;
        left:50%;
        transform:translateX(-50%)
    }
`
