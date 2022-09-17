import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const navigate = useNavigate();
  const redirectToIndex = () => {
    navigate("/index");
  };
  return (
    <>
      <LoginContainer>
        <button onClick={() => redirectToIndex()}>Start</button>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  button {
    width: 20rem;
    height: 10rem;
    font-size: 3rem;
  }
`;
