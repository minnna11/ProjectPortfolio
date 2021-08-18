import React from 'react';
import styled from 'styled-components';
import asiacafe from './images/AsiaCafe.png';
import coding from './images/coding.jpg';

export const Modal = ({showModal, setShowModal}) => {
    return (
    <>
        {showModal ? (
            
            <Container>
                <ModalWrapper showModal={showModal}>
                    <ModalImg>
                        <img src={coding} alt="coding"/>
                    </ModalImg>
                    <ModalContent>
                        <h1>Hello!</h1>
                        <p>My name is Min,</p> 
                        <br/>
                        <p>Computer Science Major</p>
                        <p>~2022</p>
                        <br/>
                        <p>University of North Carolina at Charlotte.</p>
                        <br></br>
                        <h2>Goal</h2>
                        <br/>
                        <p>My goal is to obtain a part time or a contract position in Web Development.</p>
                    </ModalContent>
                    <ClosedButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}>X</ClosedButton>
                </ModalWrapper>
            </Container>
        ) :null}
    </>
    
        );
    };


const Container = styled.div`
    margin-left:340px;
    border:5px solid black;
    width:75%;
    height:60%;
    background-color:white;
    color:white;
    position:fixed;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    border-radius:10px;
    box-shadow: 12px 15px 2px 1px rgba(0, 40, 255, .2);
    
   
`

const ClosedButton = styled.div`
    margin:10px 10px 20px 5px;
    color:black;
    font-size:25px;
    cursor:pointer;
    
`


const ModalContent = styled.div`
    
    margin: 15px 0px 0px 15px;
    padding-left:5px;
    width:70%;
    background-color:white;
    color:black;
    
`


const ModalWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-end;
    
    
`

const ModalImg = styled.div` 
    width:50%;   
    display:flex;
    justify-content:center;
    align-items:center;
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;
    border-right:4px solid black;
    background-image: linear-gradient(to right, #00ffd9, #00f2ff, #00d9ff, #85b1ff, #ff74ff);
    
    img{
        width:180px;
        height:180px;
        object-fit:contain;
        border:4px solid white;
        border-radius:120px;
        
    }
`