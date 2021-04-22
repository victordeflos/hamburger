import React from 'react'
import styled from "styled-components"




const NavbarContainer = styled.div`

width: 100%;
height: 60%;
box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
display: flex;
padding: 0 1.5rem;
`;

const LeftSection = styled.div`
display: flex;

`;



const MiddleSection = styled.div`
display: flex;
flex: 2;
`;



const RightSection = styled.div`
display: flex;
`;

export function Navbar(props) {
    return<NavbarContainer>
    <LeftSection></LeftSection> 
    <MiddleSection></MiddleSection> 
    <RightSection></RightSection> 
    </NavbarContainer>
}