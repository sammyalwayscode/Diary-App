import React, { useState } from "react";
import { ImBooks } from "react-icons/im";
import styled from "styled-components";

const SignUp = () => {
  const [sign, setSign] = useState(false);
  const signChange = () => {
    setSign(!sign);
  };
  return (
    <Container>
      <Wrapper>
        <Card>
          <MainTitle>
            <Title>
              <ImBooks /> DYA.
            </Title>

            <SubTitle>
              Best diary app, concept by <strong>OLORUNDA SAMUEL</strong>{" "}
            </SubTitle>
          </MainTitle>

          {sign ? (
            <SignInHold>
              <InputCtrl>
                <span>Your Email</span>
                <input placeholder="Enter Your Email Address" />
              </InputCtrl>
              <InputCtrl>
                <span>Password</span>
                <input placeholder="Enter Your Password" />
              </InputCtrl>
              <Button>
                <button>Sign In</button>
              </Button>
              <NotUp>
                Don't have an Account???{" "}
                <span onClick={signChange}>Sign Up</span>
              </NotUp>
            </SignInHold>
          ) : (
            <SignUpHold>
              <ImageHolder>
                <PrevImgDiv>
                  <img src="" alt="" />
                </PrevImgDiv>
                <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
                <ImageInput id="pix" type="file" accept="image/*" />
              </ImageHolder>

              <InputCtrl>
                <span>User Name</span>
                <input placeholder="Enter Your UserName" />
              </InputCtrl>
              <InputCtrl>
                <span>Your Email</span>
                <input placeholder="Enter Your Email Address" />
              </InputCtrl>
              <InputCtrl>
                <span>Password</span>
                <input placeholder="Create a Super Meroable Password" />
              </InputCtrl>
              <InputCtrl>
                <span>Confirm Password</span>
                <input placeholder="Confirm Your Password" />
              </InputCtrl>
              <Button>
                <button>Sign Up</button>
              </Button>
              <NotUp bg>
                Already have an Account???{" "}
                <span onClick={signChange}>Sign In</span>
              </NotUp>
            </SignUpHold>
          )}
        </Card>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  min-height: 89vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 1200px) {
    width: 85%;
  }
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 500px;
  min-height: 550px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const MainTitle = styled.div`
  text-align: center;
`;
const Title = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`;
const SubTitle = styled.div`
  font-size: x-small;
  margin-top: -10px;
`;
const SignUpHold = styled.div``;
const PrevImgDiv = styled.div`
  height: 80px;
  width: 80px;
  background-color: aqua;
  border-radius: 50%;
  margin: 10px 0;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  padding: 6px 12px;
  background-color: #000;
  color: white;
  border-radius: 3px;
  transition: all 350ms;
  font-size: 14px;
  outline: none;
  border: 0;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const InputCtrl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  span {
    font-size: small;
    font-weight: 600;
  }

  input {
    height: 30px;
    width: 300px;
    font-family: poppins;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  button {
    height: 32px;
    width: 80%;
    font-family: poppins;
    font-weight: 600;
    background-color: #ff9505;
    color: #fff;
    border: 0;
    outline: none;
  }
`;
const NotUp = styled.div`
  font-size: small;
  text-align: center;
  span {
    font-weight: 700;
    color: ${({ bg }) => (bg ? "green" : "red")};
    cursor: pointer;
  }
`;

const SignInHold = styled.div``;
