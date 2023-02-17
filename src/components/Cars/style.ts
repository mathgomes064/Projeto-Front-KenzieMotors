import styled from "styled-components"

export const CarSection = styled.section`
width: 94.5vw;
height: 400px;
background-color: white;
margin: 0 auto;

    .card{
        background-color: white;
        max-width: 300px;
        height: 370px;
        margin: 0px 10px 0px 10px;
    }

    .card > .imgDiv{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E9ECEF;
    }

    .card > .imgDiv > img{
        width: 170px;
        height: 150px;
        background-color: #E9ECEF;
    }
    
    .card > .divOne{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .card > .divOne > h1{
        width: 97%;
        height: 50%;
        font-size: 16px;
        font-weight: bold;
        color: black;
        text-align: start;
    }

    .card > .divOne > p{
        width: 97%;
        height: 50%;
        font-size: 14px;
        color: #495057;
        text-align: justify;
       
    }

    .card > .divTwo{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card > .divTwo > div{
        width: 97%;
        height: 32px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .card > .divTwo > div > img{
        width: 32px;
        height: 32px;
        border-radius: 100%;
        margin: 0px 5px 0px 0px 
    }

    .card > .divTwo > div > p{
        font-size: 14px;
        color: #495057;
        margin: 0px 5px 0px 5px 
    }


    .card > .divTwo > div > p{
        font-size: 14px;
        color: #495057;
    }

    .card > .divTree{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card > .divTree > div{
        width: 97%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card > .divTree > div > div{
        width: 113px;
        height: 32px;
        display: flex;
        justify-content: space-between;
    }

    .card > .divTree > div > div > span{
        width: 50px;
        height: 32px;
        border-radius: 4px;
        background-color: #EDEAFD;
        color: #4529E6;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card > .divTree > div > p{
        font-size: 16px;
        color: #212529;
        font-weight: bold;
    }
`