import React, {useState} from 'react'
import styled from 'styled-components';
import {Modal} from './Modal';

function Popup(propss) {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <Container>
            <Button onClick={openModal}>About Me</Button>
            <Modal showModal= {showModal} setShowModal={setShowModal} />
        </Container>
    )
}

export default Popup

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`
const Button = styled.button`
    font-size:15px;
    padding:10px 20px 10px 20px;
    border-radius:10px;
    
    cursor:pointer;
    border:4px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.contentColor};
    :hover{
        
    }
`