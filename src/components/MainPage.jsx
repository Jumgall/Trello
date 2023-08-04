import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const MainPage = () => {
    return (
        <div>
            <Img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png" alt="" />
            <Img2 src="https://cdn-icons-png.flaticon.com/128/2111/2111656.png" alt="" />
            <H2>Trello</H2>
            <StyledLink to="/login">Login</StyledLink>
            <div>
                <H1>Trello помогает командам эффективно решать рабочие задача.</H1>
                <P>Работайте в команде, управляйте проектами и выводите продуктивность на новый уровень собственным уникальным способом вместе с Trello.</P>
            </div>
        </div>
    );
}
export default MainPage;
const Img = styled.img`
   width: 400px;
margin-left: 900px;
margin-top: 80px;
`
const Img2 = styled.img`
    width: 43px;
    display: flex;
    margin-top: -580px;
    margin-left: 10px;
`
const H1 = styled.h1`
    width: 500px;
    margin-left: 300px;
    margin-top: 110px;
`
const P = styled.p`
width: 500px;
margin-left: 300px;
`
const H2 = styled.h1`
    margin-top: -45px;
    margin-left: 70px;
    font-size: 32px;
`
const StyledLink = styled(Link)`
margin-left: 1400px;
flex: none;
margin-left: 1400px;
margin-top: 10px;
width: 400px;
height: 30px;
border-radius: 4px;
background-color: #005180;
color: white;
border: box none;
margin-top: 500px;
border: 1px solid black;   
background-color : blue ;
color: white;
text-decoration: none;
`