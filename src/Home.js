import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import styled from 'styled-components';
import Contact from './Contact';
import DarkMode from './DarkMode'

function Home(props) {
  function changeTheme() {
    if(props.theme == 'light'){
        props.setTheme('dark');
    } else{
        props.setTheme('light');
    }
};
  return (
      
    <div className="Home">
      
        <DarkMode /> 
        <About />
        <Projects>
            <ProjectOne/>
            <ProjectTwo />
            <ProjectThree />
        </Projects>
        <Contact />
      
    </div>
  );
}

export default Home;

const Projects = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items:center;
  margin-right:75px;
  margin-left:45px;
`