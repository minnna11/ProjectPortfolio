import React from 'react'
import styled from 'styled-components'
import asiacafe from './images/AsiaCafe.png';
import { motion } from 'framer-motion'
function ProjectThree() {
    return (

        <motion.dv whileHover={{scale:1.3}}
        transition={{duration:.5}}>
        <Container>
            
            <ContentName>
                    Project 3
            </ContentName>
            <MainContent>
                <ContentRight>
                    <ContentDescription>
                        <h1>Tools</h1>
                        <p>JavaScript</p>
                        <p>CSS & HTML</p>
                        <p>React</p>
                        <p>Firebase</p>
                    </ContentDescription>
                    <ContentButton><a href="https://asia-cafe-b97aa.web.app/" target="_blank">Amazon Clone</a></ContentButton>
                </ContentRight>
                <ContentImage>
                    <img src={asiacafe} alt="Logo" />
                </ContentImage>
            </MainContent>
            
        </Container>
        </motion.dv>
    )
}

export default ProjectThree
const Container = styled.div`
    margin-top:140px;
    display:flex;
    flex-direction: column;
    height:500px;
    justify-content:center;
    align-items:center;
    margin-bottom:100px;
`
const ContentName = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:center;
    color:black;
    margin-bottom:5px;
`
const ContentImage = styled.div`
    img{
        width:320px;
        height:320px;
        object-fit:contain;
    }
`

const MainContent = styled.div`
    
padding:10px 15px 10px 15px;
box-shadow: 12px 15px 2px 1px rgba(0, 40, 255, .2);
border:2px solid black;
display:flex;
    
`

const ContentButton = styled.div`
    margin-top:25px;
    border:2px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 7px 2px 7px 2px;
    margin-right:10px;
    border-radius:10px;
    text-align:center;
    :hover{
        background-color:black;
        color:white;
    }

    a{
        text-decoration:none;
        color:black;
        display:flex;
        
    }
`

const ContentDescription = styled.div`
    color:black;
    
    margin-top:35px;
    margin-right:20px;
     h1{
         margin-bottom:10px;
     }

     p{
         margin-bottom:10px;
     }
`

const ContentRight = styled.div`
     display:flex;
     flex-direction:column;
`