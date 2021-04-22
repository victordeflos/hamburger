import React from 'react'
import styled from "styled-components";
import EthicalCitiesLogoImg from "../../assets/images/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  
`;

const LogoImg = styled.div`
  width: 20px;
  height: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  color:#00e1ff;
  font-size: 12px;
  margin: 0;
  margin-left: 6px;
  font-weight: 350;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={EthicalCitiesLogoImg} alt="Ethical Cities logo" />
      </LogoImg>
      <LogoText>Code<span>Academy</span>-Project</LogoText>
    </LogoWrapper>
  );
}
