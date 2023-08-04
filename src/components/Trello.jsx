
import React, { useState } from 'react';
import { styled } from 'styled-components';
const Trello = () => {
    const [open, setOpen] = useState(false)
    const openHandler = () => {
        setOpen(true)
    }
    const [values, setValues] = useState();
    const [todo, setTodo] = useState([]);
    const handleClick = () => {
        if (values !== "" && todo !== "") {
            setTodo([...todo, values]);
        }
    }
    return (
        <Container1>
            <div>
                <Container>
                    <Borderdiv>
                        <Div1>
                            <Img1 src="https://img.icons8.com/?size=512&id=VnAs16Q9VvJP&format=png" alt="" />
                            <H2>Boards</H2>
                        </Div1>
                        <Div3>
                            <Img2 src="https://img.icons8.com/?size=1x&id=ObuWtTlsoTj6&format=png" alt="" />
                        </Div3>
                        <Div4>
                            <Img3 src="https://img.icons8.com/?size=512&id=VnAs16Q9VvJP&format=png" alt="" />
                            <H1>Trello</H1>
                        </Div4>
                        <div5>
                            <img4 src="https://avatars.mds.yandex.net/i?id=aab0d5262d20d2a66d88a6247a26eb82d7d0bb17-9226866-images-thumbs&n=13" alt="" />
                        </div5>
                        <Div6>
                            <Img5 src="https://cdn-icons-png.flaticon.com/128/7510/7510850.png" alt="" />
                        </Div6>
                        <Div7>
                            <Img6 src="data:image/jpeg;base64,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" />
                            <H11>Jumgal Alymbekov</H11>
                        </Div7>
                    </Borderdiv>
                </Container>
            </div>
            <Div9>
                {!open && <Div onClick={openHandler}> + Добавить еще одну колонку</Div>}
                {open && <div>
                    <Input type="text" placeholder='Ввести заголок списка' />
                    <Button>Добавить список</Button>
                    <Img src="https://cdn-icons-png.flaticon.com/128/6932/6932392.png" alt="" />
                </div>}
                <divinp>
                    <Backgroundinput>
                        <ol>
                            {todo.map((todos) => (
                                <li>{todos}</li>
                            ))}
                        </ol>
                    </Backgroundinput>
                </divinp>
            </Div9>
        </Container1>
    );
};
export default Trello;
const Borderdiv = styled.div`
    background-color: #717072;
    width: 100%;
    height: 100px;
   padding-top:10px;
`
const H11 = styled.h1`
    margin-left: 55px;
    font-size: 20px;
    margin-top: -40px;
    height: 20px;
`
const Img6 = styled.img`
    width: 45px;
    height: 45px;
    margin-left: 3px;
    margin-top: 2px ;
    border-radius: 5px;
`
const Div7 = styled.div`
    background-color: white;
    width: 250px;
    height: 50px;
    margin-left: 76%;
    margin-top: -57px;
    border-radius: 5px;
`
const Backgroundinput = styled.div`
    padding: 20px 50px;
`
const Img5 = styled.img`
        width: 40px;
        height: 35px;
        border-radius: 5px;
        margin-left: 17px;
        margin-top: 13px;
`
const Div6 = styled.div`
      background-color: rgba(80, 119, 196, 0.5);
        margin-left: 60%;
        width: 5%;
        margin-top: -50px;
        height: 60px;
        border-radius: 5px;
`
const Input = styled.input`
padding: 10px 40px;
border: 2px solid black;
margin-top: 5px;
`
const Button = styled.button`
    padding: 10px 20px;
    margin-left: 10px;
    display: flex;
    margin-top: 10px;
`
const Img = styled.img`
 width: 30px;
 height: 30px;
 margin-left: 175px;
 margin-top: -33px;
 display: flex;
 
`
const H1 = styled.div`
font-family: 'Courier New', Courier, monospace;
text-shadow: 3px 7px 4px;
margin-left: 10px;
color: white;
margin-top: 15px;
`
const H2 = styled.div`
margin-left: 13px;
margin-top: 25px;
color: white;
font-family: initial;
`
const Div = styled.div`
background-color: #424242;
width: 300px;
height: 40px;
margin-left: 20px;
margin-top: -600px;
padding: 8px 15px;
border-radius: 5px;
color: white;
`
const Div1 = styled.div`
        display: flex;   
        background-color: rgba(255, 255, 255, 0.5);
        width: 140px;
        height: 70px;
        margin-left: 20px;
        margin-top: 10px;
        border-radius: 5px;
`
const Img1 = styled.img`
        width: 40px;
        height: 45px;
        margin-top: 10px;
        margin-left: 10px;
        color: blue;
`
const Div3 = styled.div`   
        background-color: rgba(80, 119, 196, 0.5);
        margin-top: -60px;
        margin-left: 200px;
        width: 20%;
        height: 65px;
        border-radius: 5px;
`
const Img2 = styled.img`
        width: 50px;
        height: 50px;
        margin-left: 80%;
        margin-top: 8px;
`
const Div4 = styled.div`
        display: flex;
        margin-top: -60px;
        margin-left: 650px;
`
const Img3 = styled.img`
        width: 50px;
        height: 50px;
`
const Container = styled.div`
    background-color: blue;
    width: 100%;
    height: 100vh;
   margin-bottom: 10;
   padding: 0;
   border: 0;
`
const Div9 = styled.div`
    margin-top: -600px;
`
const Container1 = styled.div`
margin-top: -13px;
`