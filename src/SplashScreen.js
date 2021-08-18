import styled from 'styled-components';
import {CgSun} from 'react-icons/cg';
import {HiMoon} from 'react-icons/hi';

function SplashScreen(props){
    function changeTheme() {
        if(props.theme == 'light'){
            props.setTheme('dark');
        } else{
            props.setTheme('light');
        }
    };

//const icon = props.theme =='light' ? <HiMoon color={white}/> <CgSun color={{black}}/>: <CgSun size={40}/>;

return (
    <Page>
        <Container>
            <Toggle onClick={changeTheme}>
               

            </Toggle>
            <Title>
                HELLO WORLD
            </Title>
        </Container>
    </Page>

)
}
export default SplashScreen

const Page = styled.div`
height:100vh;
width:100%
background-color: ${props => props.theme.pageBackgrouund};
`
const Container = styled.div``
const Toggle = styled.div`
cursor:pointer;
height:50px;
weight:50px;
background-color:${props => props.theme.pageBackground};
color: ${props => props.theme.titleColor};
`
const Title = styled.div`
color: ${props => props.theme.titleColor};
`