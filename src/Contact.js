import React from 'react'
import styled from 'styled-components'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { MicNone } from '@material-ui/icons';

function Contact() {
    return (
        <Content>
        <Container>
            
            <LeftContent>
                <ContactHeader id="contact">
                    <h1>Contact</h1>
                </ContactHeader>
                <ContactDescription>
                    <IconOne>
                        <PhoneContent>
                            <PhoneIcon />
                            <h2>Phone</h2>                   
                        </PhoneContent>
                        <PhoneNumber>
                            <h2>919-448-7647</h2>
                        </PhoneNumber>
                    </IconOne>
                    
                    
                    <IconTwo>
                        <MailContent>
                            <MailOutlineIcon />
                            <h2>Email</h2>
                        </MailContent>
                        <EmailContent>
                            <h2>maung@uncc.com</h2>
                        </EmailContent>
                    </IconTwo>
                    
                    
                </ContactDescription>
                <ContainIcon>
                    <LinkedInIcon style={{fontSize:40, marginRight:10}} />
                    <GitHubIcon style={{fontSize:34}}/>
                </ContainIcon>
            </LeftContent>
            <RightContent>
                <form>
                    <ClientInput>
                        <FirstName>
                            <label>
                                <h1>First</h1>
                                <input style={{width:180}} type="text" name="fName" />
                            </label>
                        </FirstName>
                        <LastName>
                            <label>
                                <h1>Last</h1>
                                <input style={{width:180}} type="text" name="lName" />
                            </label>
                        </LastName>
                        
                        <ClientEmail>
                            <label>
                                <h1>Email</h1>
                                <input style={{width:180}} type="email" name="email" />
                            </label>
                        </ClientEmail>
                        <ClientPhone>
                            <label>
                                <h1>Phone</h1>
                                <input style={{width:180}} type="text" name="phone" />
                            </label>
                        </ClientPhone>
                        <ClientMessage>
                        <label>
                                <h1>Message</h1>
                                <input style={{width:180}} type="text" name="Message" />
                                
                            </label>
                        </ClientMessage>
                    </ClientInput>
                    <ContactButton>
                        <input type="submit" value="Send" />
                    </ContactButton>                   
                </form>
            </RightContent>
            
        </Container>
        </Content>
    )
}

export default Contact
const Content = styled.div`
    margin-bottom:10px;
    padding:20px 0px 100px 0px;
`
const Container = styled.div`
    width:60%;
    height: 74vh;
    display:flex;
    margin:0 auto;
    margin-top:70px;
    border-radius:50px;
    
    
`
const LeftContent = styled.div`
    box-shadow: 12px 22px 18px 1px rgba(0, 0, 0, .7);
    width:30%;
    padding:40px 15px 20px 30px;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    background-color:black;
    color:white;
    margin-left:-70px;
    margin-right:20px;
    h2 {
        font-size:15px;
    }
    
`
const ContactHeader = styled.div`
    text-shadow: 5px 5px 2px black;
`
const ContactDescription = styled.div`
    margin-bottom:80px;
`
const ContainIcon = styled.div`
    margin-top:200px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    
`
const RightContent = styled.div`
    padding:40px 10px 20px 35px;
    border-top:8px solid black;
    border-bottom:8px solid black;
    border-right:5px solid black;
    margin-left:30px;
    margin-right:20px;
    box-shadow: 17px 10px 18px 10px rgba(0, 0, 0, .7);
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    display:flex;
    width:80%;
    
    h1{
        font-size:15px;
    }

    
`
const PhoneContent = styled.div`
    margin-top:27px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    h2{
        font-size:15px;
        margin-left:5px;
    }
`

const PhoneNumber = styled.div`
    margin-top:10px;
    
`
const IconOne = styled.div`
    margin-bottom:20px;
`
const IconTwo = styled.div`
    word-wrap:break-word;
    padding-right:20px;
`
const MailContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    h2{
        font-size:15px;
        margin-left:5px;
    }
    
`
const EmailContent =styled.div`
    margin-top: 10px;
`

const FirstName = styled.div`
    display:flex;
    flex-direction:column;
    width:130px;
    
    margin-right:90px;
    margin-bottom:35px;
`
const LastName = styled.div`
    display:flex;
    flex-direction:column;
    max-width:180px;
    margin-bottom:20px; 
`

const ClientInput = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-right:-5px;
    
    input {
        outline: 0px;
        border-width:0 0 2px;
        border-color:black; 
        margin-top:20px;
    }
    input:focus{
        border-color: #FF1493;
    }

    textarea{
        outline: 0px;
        border-width:0 0 2px;
        border-color:black;
        padding-top:10px;
        resize:none;
        border-left:1px solid black;
    }

    textarea:focus{
        border-color: #FF1493;
    }
`
const ClientPhone = styled.div`
    width:100%;
    margin-top:40px;
`
const ClientEmail = styled.div`
    width:100%;
    margin-top:10px;
`
const ClientMessage = styled.div`
    margin-top:40px;
    margin-bottom:5px;
    h1{
        margin-bottom:5px;
    }
`

const ContactButton = styled.div`
   display:flex;
   align-items:center;
   justify-content:flex-end;
    input{
       border-radius:10px;
       background-color:black;
       color:white;
       padding: 8px 35px 8px 35px;  
       margin:10px 25px 0px 0px;
   }
`