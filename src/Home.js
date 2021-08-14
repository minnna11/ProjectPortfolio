import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import styled from 'styled-components';
import Contact from './Contact';


function Home() {
  return (
      
    <div className="Home">
      
        <Header /> 
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