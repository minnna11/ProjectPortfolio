import React from 'react';
import styled from "styled-components";
import {Link} from 'react-scroll';
import {CgSun} from 'react-icons/cg';
import {HiMoon} from 'react-icons/hi';

function Header(props) {
    function changeTheme() {
        if(props.theme == 'light'){
            props.setTheme('dark');
        } else{
            props.setTheme('light');
        }
    };
    const moon = props.theme =='light' ? <HiMoon color={'black'}/> : <HiMoon color={'white'}/>;
    
    return (
        /* Header container*/
        <Container>     
            {/*Header Project*/}
            <HeaderOptionOne>                   
                <Link to="project" smooth={true} duration={100} offset={-70}><h1>Project</h1></Link>
            </HeaderOptionOne>
                        
            {/*Header About*/}
            <HeaderOptionTwo>
                <Link to="contact" smooth={true} duration={100} offset={-70}><h1>Contact</h1></Link>
            </HeaderOptionTwo>
                           
            {/*Header Mode*/}
            <HeaderMode onClick={changeTheme}>
                <ButtonOne>
                    <CgSun/>
                </ButtonOne>
                <ButtonTwo>
                    {moon}
                </ButtonTwo>   
            </HeaderMode>      
        </Container>
        
    )
}

export default Header


const Container = styled.div`
    display: flex;
    justify-content: flex-end; 
    
    font-size: 10px;
    padding:40px 40px 40px 60px;
    align-items:center;
    
`

const HeaderOptionOne = styled.div`
    margin-right:45px;
    cursor:pointer;
    
`

const HeaderOptionTwo = styled.div`
    margin-right:45px;
    cursor:pointer;
`

const HeaderMode = styled.div`
    margin-right:50px;
    cursor:pointer;
    font-size:20px;
    
    display:flex;
    align-items:center;
    justify-content:center;
    

`
const ButtonOne = styled.div`
    padding:4px 5px 3px 5px;
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
    border:3px solid ${props => props.theme.BorderColor};
    margin-right:-2px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${props => props.theme.buttonColor};
    color: black;
`
const ButtonTwo = styled.div`
    padding:4px 5px 3px 5px;
    border-top-right-radius:15px;
    border-bottom-right-radius:15px;
    border:3px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    
    background-color:${props => props.theme.pageBackground};
    border:3px solid ${props => props.theme.BorderColor};
`
