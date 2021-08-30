import React from 'react'
import styled from 'styled-components'
import amazon from './images/amazon-image.png';
import { motion } from 'framer-motion'

function ProjectTwo(props) {

    return (
        
        <motion.div  whileHover={{ scale: 1.3 }}
            
            transition={{duration:.5}}
        >
            
        <Container>
            
            <ContentName>
                    Project 2
            </ContentName>
            <MainContent>
                <ContentLeft>
                    <ContentDescription>
                        <h1>Tools</h1>
                        <p>JavaScript</p>
                        <p>CSS & HTML</p>
                        <p>React</p>
                        <p>Firebase</p>
                    </ContentDescription>
                    <ContentButton><a href="https://clone-d25b7.web.app/" target="_blank">Amazon Clone</a></ContentButton>
                </ContentLeft>
                <ContentImage>
                    <img src={amazon} alt="Logo" />
                </ContentImage>
            </MainContent>
            
        </Container>
        
        </motion.div>
       
    )
}

export default ProjectTwo
const Container = styled.div`
    margin-top:140px;
    display:flex;
    flex-direction: column;
    height:500px;
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
    padding: 7px 2px 7px 2px;
    margin-right:10px;
    border-radius:10px;
    
    :hover{
        background-color: ${props => props.theme.hoverColor};
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