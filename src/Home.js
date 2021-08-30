import {useState} from 'react'
import { ThemeProvider} from "styled-components";
import './App.css';
import About from './About';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import styled from 'styled-components';
import Contact from './Contact';
import Header from "./Header";


const DarkTheme = {
    pageBackground: "#080808",
    contentColor: "white",
    borderColor:"white",
    hoverColor: "white",
    hoverText: "#080808",
    shadows: "none",
    contactShadow:"3px 2px 3px gray",
    buttonColor:"",
}

const LightTheme = {
    pageBackground:"white",
    contentColor: "#080808",
    borderColor:"#080808",
    hoverColor: "#080808",
    hoverText: "white",
    shadows: "12px 15px 2px 1px rgba(0, 40, 255, .2)",
    contactShadow:"5px 5px 2px black",
    buttonColor:"#cccc00",
}

const themes ={
    light: LightTheme,
    dark: DarkTheme,
}
function Home(props) {
    const[theme, setTheme] = useState("light")
    return (
        <ThemeProvider theme={themes[theme]}>
            
            <Header theme={theme} setTheme={setTheme} />
            <About />
            <Projects>
                <ProjectOne/>
                <ProjectTwo />
                
            </Projects>
            <Contact />
            
        </ThemeProvider>
        
    )
}

export default Home;

const Projects = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items:center;
  padding-right:75px;
  padding-left:45px;
  background-color: ${props => props.theme.pageBackground};
`