import React from "react";
import { Bars } from "react-loading-icons";
import styled from "styled-components";

const LoadingState = () => {
  return (
    <Container>
      <Bars
        stroke="#742ed9"
        strokeOpacity={1}
        speed={0.75}
        fill="transparent"
        strokeWidth={3}
      />
    </Container>
  );
};

export default LoadingState;

const Container = styled.div`
  width: calc(100vw);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  /* border-radius: 10px; */
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
`;
