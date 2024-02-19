import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import Button from "@mui/material/Button";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const LeftDiv = styled.div`
  position: relative;
`;

const BackgroundImage = styled.div`
  height: 200px;
  width: 300px;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const LoginHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  color: #1976d2;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
  & .MuiOutlinedInput-root {
    border-radius: 0 0 0 0;
    box-shadow: inset 6px 0em #1976d2;
  }
`;

const Login = () => {
  return (
    <MainContainer>
      <LeftDiv>
        <BackgroundImage>
          <ImageWrapper>
            <Image
              src="/loginBG.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageWrapper>
        </BackgroundImage>
      </LeftDiv>

      <RightDiv>
        <LoginHeader>Login</LoginHeader>

        <LoginDiv>
          <StyledTextField
            id="outlined-username-input"
            label="Username"
            autoComplete="current-password"
            variant="outlined"
          />
          <StyledTextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />

          <Button variant="contained">Login</Button>
        </LoginDiv>
      </RightDiv>
    </MainContainer>
  );
};

export default Login;
