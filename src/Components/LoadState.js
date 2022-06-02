import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";

const LoadState = () => {
  let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#fff");

  return (
    <Div className="sweet-loading">
      <HashLoader loading={loading} size={100} />
    </Div>
  );
};

export default LoadState;

const Div = styled.div`
  height: 90vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
