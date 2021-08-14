import React from 'react';
import styled from "styled-components";

import About from './About';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import ScrollToTop from './ScrollToTop';
import {Link} from 'react-scroll'
function Header() {
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
                            <HeaderMode>
                                <h1>Button</h1>
                            </HeaderMode>
                        

                
            </Container>
        
    )
}

export default Header


const Container = styled.div`
    display: flex;
    justify-content: flex-end; 
    margin: 20px 40px 20px 40px;
    font-size: 10px;
    padding:20px 0px 20px 20px;
 
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
`