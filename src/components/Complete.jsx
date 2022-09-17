import React from "react";
import styled from "styled-components";

export default function Complete() {
  return (
    <CompleteComponent>
      <div className="head">Complete</div>
      <div className="container">
        <div className="body" id="body"></div>
      </div>
    </CompleteComponent>
  );
}
const CompleteComponent = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  .head {
    background-color: #c9c7c7;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 10vw;
    min-height: 50vh;
    background-color: #c9c7c7;
    .body {
      padding: 1rem;
      width: 80%;
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
    }
    button {
      width: 50%;
      margin-bottom: 1rem;
    }
  }
`;
