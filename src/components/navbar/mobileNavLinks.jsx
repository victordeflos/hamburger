import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color:turquoise;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #000000;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 55px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color:#16c9cf;
  font-weight: 600px;
  font-size: 15px;
  display: flex;

  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  
`;

const Marginer = styled.div`
  height: 2em;
  
`;


export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
        <LinkItem>
            <Link href="#">Movie</Link>
          </LinkItem>

          <LinkItem>
            <Link href="#">About us</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Services</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">FAQ</Link>
          </LinkItem>
          
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
