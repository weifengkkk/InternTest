import React from "react";
import styled from "styled-components";
import Test from "../pages/Test";
export default function Learning() {
  return (
    <>
      <LearningComponent>
        <div className="head">Learing...</div>
        <div className="container">
          <div className="body" id="body"></div>
        </div>
      </LearningComponent>
    </>
  );
}
const LearningComponent = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  .head {
    background-color: #6db57c;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10vw;
    min-height: 50vh;
    background-color: #6db57c;
    .body {
      padding: 1rem;
      width: 80%;
      display: flex;
      gap: 1rem;
      flex-direction: column;
    }
    button {
      width: 50%;
      margin-bottom: 1rem;
    }
  }
`;
