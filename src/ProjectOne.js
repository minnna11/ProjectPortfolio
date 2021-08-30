import React from 'react'
import styled from 'styled-components'
import asiacafe from './images/AsiaCafe.png';
import { motion } from 'framer-motion'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink
  } from "react-router-dom";

function ProjectOne(props) {

    return (
        
        <motion.div  whileHover={{ scale: 1.3 }}
            
            transition={{duration:.5}}
        >
            
        <Container>
            
            <ContentName id="project">
                    Project 1
            </ContentName>
            <MainContent>
                <ContentLeft>
                    <ContentDescription>
                        <h1>Tools</h1>
                        <p>JavaScript</p>
                        <p>CSS & HTML</p>
                        <p>Tailwind CSS</p>
                        <p>Firebase</p>
                    </ContentDescription>
                    <ContentButton><a href="https://asia-cafe-b97aa.web.app/" target="_blank">Asia Cafe</a></ContentButton>
                </ContentLeft>
                <ContentImage>
                    <img src={asiacafe} alt="Logo" />
                </ContentImage>
            </MainContent>
            
        </Container>
        
        </motion.div>
       
    )
}

export default ProjectOne
const Container = styled.div`
    margin-top:140px;
    display:flex;
    flex-direction: column;
    height:400px;
    justify-content:center;
    align-items:center;
    
`
const ContentName = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:center;
    color:${props => props.theme.contentColor};
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
    box-shadow: ${props => props.theme.shadows};
    border:4px solid ${props => props.theme.borderColor};
    display:flex;
    
`

const ContentButton = styled.div`
    margin-top:25px;
    border:3px solid ${props => props.theme.borderColor};
    
    display:flex;
    justify-content:center;
    padding: 7px 0px 7px 0px;
    margin-right:10px;
    border-radius:10px;
    
    :hover{
        background-color:${props => props.theme.hoverColor};
    }

    a{
        text-decoration:none;   
        color: ${props => props.theme.contentColor};
    }
    a:hover {
        color:${props => props.theme.hoverText};
    }
`

const ContentDescription = styled.div`
    color: ${props => props.theme.contentColor};
    margin-top:35px;
    margin-right:20px;
     h1{
         margin-bottom:10px;
     }

     p{
         margin-bottom:10px;
     }
`

const ContentLeft = styled.div`
     display:flex;
     flex-direction:column;   
`