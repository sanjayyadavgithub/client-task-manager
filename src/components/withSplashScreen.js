
import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../Images/Logo.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #15171e;
`;

const LogoText = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  text-transform: uppercase;
  background: linear-gradient(
    225deg,
    rgb(132, 0, 255) 0%,
    rgb(230, 0, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 38px;
  gap: 12px;
`;

const LogoImg = styled.img`
  height: 40px;
`;
const withSplashScreen = (WrappedComponent) => {
  return (props) => {
    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }, []);

    return showSplash ? (
      <Container>
        <LogoText>
          {/* <LogoImg src={Logo} /> */}
          Task Manager
        </LogoText>
      </Container>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default withSplashScreen;
