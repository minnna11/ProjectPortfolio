import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button} from 'react-bootstrap';
import Social from './Social';
import { motion } from 'framer-motion';
import Popup from './Popup';

function About(props) {
   
    //const icon = props.theme =='light' ? <CgSun color={'white'}/> : <CgSun color={'black'}/>;
    //const icon2 = props.theme =='light' ? <HiMoon color={'black'}/> : <HiMoon color={'white'}/>;
    return (
        //content container
        <Container>
                <motion.div
  animate={{  y:130 }}
  transition={{ ease: "easeOut", duration: 2 }}
>
            <ContentA>
                    <ContentName>Min</ContentName>
                
                    <ContentButton>
                        <Popup />
                    </ContentButton>
            </ContentA>
            </motion.div>
            <Border></Border>
            <ContentB>
                <SocialOne><a href="https://www.linkedin.com/in/maung17/" target="_blank"><LinkedInIcon style={{fontSize: 60}}/></a></SocialOne>
                <SocialTwo><a href="https://github.com/minnna11" target="_blank"><GitHubIcon style={{fontSize: 50}}/></a></SocialTwo>
            
            </ContentB>
            
        </Container>
    )
}

export default About

const Container = styled.div`
    display:flex;
    justify-content:flex-end;
    height:500px;
    background-color:${props => props.theme.pageBackground};
`

const ContentB = styled.div`
    
    display:flex;
    align-items:center;
    flex-direction:column;
    width:70px;
    
    margin:25px 45px 0px 70px;

    a{
        color:${props => props.theme.contentColor};
    }
    a:hover{
        color:${props => props.theme.contentColor};
    }
`
const ContentA = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:80px;
    align-items:center;
    text-decoration: none;  
    width:500px;
    margin-right:200px;
    color:${props => props.theme.contentColor};
`

const ContentName = styled.div`
    margin-bottom:30px;
    font-size:50px;
`

const ContentButton = styled.div`
`

const Border = styled.div`
    width:40%;
`

const SocialOne = styled.div`
    cursor:pointer;
    margin-bottom:17px;
    
`
const SocialTwo = styled.div`
    cursor:pointer;
`
