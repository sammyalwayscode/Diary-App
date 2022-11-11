import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";

const LoadState = () => {
  let [loading] = useState(true);

  return (
    <Div className="sweet-loading">
      <HashLoader loading={loading} size={100} />
    </Div>
  );
};

export default LoadState;

const Div = styled.div`
  width: calc(100vw);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  /* border-radius: 10px; */
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
`;
