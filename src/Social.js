import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Social() {
    return (
        <Container>
            <LinkedInIcon />
            <GitHubIcon />
        </Container>
    )
}

const Container = styled.div`
    
`