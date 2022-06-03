import React from "react";
import { ImBooks } from "react-icons/im";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Container>
      <MainTitle>
        <Title>
          <ImBooks /> DYA.
        </Title>

        <SubTitle>
          Best diary app, concept by <strong>OLORUNDA SAMUEL</strong>{" "}
        </SubTitle>
        <NavLink to="/signup">
          <button>Get Started</button>
        </NavLink>
      </MainTitle>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  height: 100%;
  min-height: 90vh;
  width: 100%;
  background-image: url("/diary.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainTitle = styled.div`
  height: 100%;
  min-height: 90vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  text-align: center;

  button {
    padding: 9px 20px;
    font-family: poppins;
    background-color: #000;
    outline: none;
    border: 0;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 350ms;

    :hover {
      transform: scale(0.97);
    }
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 800;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SubTitle = styled.div`
  color: #fff;
  margin-bottom: 20px;
  width: 95%;
`;
