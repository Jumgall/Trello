import React, { useState } from 'react';
import styled from 'styled-components'
import BackgorundImg from '../Img/photo_2023-07-17_15-26-19.jpg'
import { Link, useNavigate, } from 'react-router-dom';
import validation from './Vall'
const LoginPage = () => {


        const [email, setEmailValue] = useState("")
        const [password, setPassword] = useState("")
        const [error, setError,] = useState(false)
        const navigate = useNavigate()

        const volidationHandler = (e) => {
                e.preventDefault()
                if (email === 'jumgal@gmail.com' && password === 123456) {
                        navigate('/trello')
                }
                if (email === "" && password === "") {
                        setError(true)
                }
        }
        const StyledLink = {
                display: 'flex',
                background: 'blue',
                width: '255px',
                height: '30px',
                marginLeft: '70px',
                marginTop: '25px',
                padding: '1px 100px',
                textDecoration: 'none',
                fontSize: '20px',
             

        }
        return (
                <Container >
                        <Divimg>
                                <img src="https://img.icons8.com/?size=1x&id=21049&format=png" alt="" />
                                <h1>Trello</h1>
                        </Divimg>
                        <Card>
                                <Div>
                                        <H2>Добро пожаловать в Trello</H2>
                                        <P2>Вход в Trello</P2>
                                        <div>
                                                <form >
                                                        <Input1 placeholder='Email' type='email' onChange={(e) => setEmailValue(e.target.value)} /><br />
                                                        {error ? <Label>Your Email can't be Empty</Label> : ""}
                                                        <Input2 placeholder='Password' type='password' onChange={(e) => setPassword(+e.target.value)} /><br />
                                                        {error ? <Label>Your Password can't be Empty</Label> : ""}
                                                        <Button onClick={volidationHandler}>Войти</Button>

                                                </form >
                                                <P3>ИЛИ</P3>
                                                <Sayt1 href="https://www.google.kg/"><Img1 src='https://img.icons8.com/?size=1x&id=17949&format=png' />Войти через Google</Sayt1>
                                                <Sayt2 href=" http://microsoft.com/"><Img2 src='https://img.icons8.com/?size=1x&id=22989&format=png' />Войти через Microsoft</Sayt2>
                                                <Sayt3 href="https://www.apple.com/"><Img3 src='https://img.icons8.com/?size=1x&id=30840&format=png' />Войти через Apple</Sayt3>
                                                <Sayt4 href="">Вход с помощью SSO</Sayt4>
                                                <Hr />
                                                <Sayt5 href="">Не удается войти? Зарегистрировать акаунт</Sayt5>
                                        </div>
                                </Div>
                        </Card>
                </Container>
        );
};
export default LoginPage;

const Container = styled.div`
background-image: url(${BackgorundImg});
width: 100%;
height: 94.50vh;
background-size: cover;
margin: 0px;  
padding-bottom: 0;
`
const Button = styled.button`
height: 32px;
background-color: #1601a1;
width: 310px;
margin-top: 15px;
border: none;
border-radius: 3px;
color: #fff;
margin-left: 40px;
`
const Divimg = styled.div`
display: flex;
margin-left: 45%;
margin-top: 40px;
`
const Card = styled.div`
display: flex;
justify-content: center;
`
const Div = styled.div`
border: 1px solid black;
width: 400px;
height: 550px;
`
const P2 = styled.p`
text-align: center;
font-size: 17px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
color: #6e6e6e;
margin-top: 40px;
`
const Input1 = styled.input`
width: 255px;
height: 30px;
margin-left: 70px;
margin-top: 10px;
text-align: center;
`
const Input2 = styled.input`
width: 255px;
height: 30px;
margin-left: 70px;
margin-top: 10px;
text-align: center;
`
const P3 = styled.p`
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
`
const Sayt1 = styled.a`
        display: flex;
        justify-content: center;
        width: 255px;
        margin-left: 73px;
        border: 1px solid black;
        font-size: 18px;
        height: 30px;
        text-decoration: none;
        margin-top: 8%;
`
const Sayt2 = styled.a`
        display: flex;
        justify-content: center;
        width: 255px;
        margin-left: 73px;
        border: 1px solid black;
        margin-top: 10px;
        height: 30px;
        font-size: 18px;
        text-decoration: none;
`
const Sayt3 = styled.a`
        display: flex;
        justify-content: center;
        width: 255px;
        margin-left: 73px;
        border: 1px solid black;
        height: 30px;
        margin-top: 10px;
        font-size: 18px;
        text-decoration: none;
`
const Sayt4 = styled.a`
        display: flex;
        justify-content: center;
        text-decoration: none;
`
const Hr = styled.hr`
        width: 300px;
        height: 2px;
        margin-left: 50px;
        margin-top: 5px;
`
const Sayt5 = styled.a`
        display: flex;
        justify-content: center;
        text-decoration: none;
        margin-top: 5px;
`
const Img1 = styled.img`
        margin-right: 10px;
`
const Img2 = styled.img`
        margin-right: 10px;
`
const Img3 = styled.img`
        margin-right: 10px;
`
const H2 = styled.h2`
        width: 500px;
        margin-left: 23px;
        margin-top: 20px;
        font-family: 'Courier New', Courier, monospace;
`
const Label = styled.label`
text-align: center;
color: red;
`