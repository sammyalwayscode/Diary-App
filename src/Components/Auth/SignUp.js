import React, { useState } from "react";
import { ImBooks } from "react-icons/im";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoadState from "../LoadState";

const SignUp = () => {
  const [image, setImage] = useState("/avatar.gif");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    userName: yup.string().required("Please Enter Your Username"),
    email: yup.string().email().required("email needed to complet process"),
    password: yup.string().required("Password field is Required"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Please re-confirm your password"),
  });

  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const onSummit = handleSubmit(async (value) => {
    console.log(value);
    const { userName, email, password } = value;

    const mainURL = "https://sam-diary.herokuapp.com";
    // const mainURL = "http://localhost:2120";
    // const mainURL = "https://tame-rose-stingray-robe.cyclic.app";
    const URL = `${mainURL}/api/diary/user/signup`;
    setLoading(true);

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const config = {
      "content-type": "multipart/form-data",
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percent = Math.floor((loaded * 100) / total);
        console.log(percent);
      },
    };

    await axios
      .post(URL, formData, config)
      .then((res) => {
        console.log("Data:", res);
        swal({
          title: `Welcome ${userName}`,
          text: "You just Signed Up Please proceed to Sign In",
          icon: "success",
          button: "Sign In Now",
        }).then(() => {
          navigate("/signin");
        });
        setLoading(false);
      })
      .catch((error) => {
        swal({
          title: error.response.data.status,
          text: "If you've not signed up before, Check if you've Uploaded an Image, Or maybe your network Connection",
          icon: "error",
        });
        setLoading(false);
      });
  });

  return (
    <Container>
      {loading ? <LoadState /> : null}
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

          <SignUpHold onSubmit={onSummit} type="multipart/form-data">
            <ImageHolder>
              <PrevImgDiv>
                <img src={image} alt="" />
              </PrevImgDiv>
              <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
              <ImageInput
                onChange={handleImage}
                id="pix"
                type="file"
                accept="image/*"
              />
            </ImageHolder>

            <InputCtrl>
              <span>User Name</span>
              <input
                placeholder="Enter Your UserName"
                {...register("userName")}
              />
              <Error> {errors.username?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Your Email</span>
              <input
                placeholder="Enter Your Email Address"
                {...register("email")}
              />
              <Error> {errors.email?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Password</span>
              <input
                type="password"
                placeholder="Create a Super Meroable Password"
                {...register("password")}
              />
              <Error> {errors.password?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Confirm Password</span>
              <input
                type="password"
                placeholder="Confirm Your Password"
                {...register("confirm")}
              />
              <Error> {errors.confirm?.message} </Error>
            </InputCtrl>
            <Button>
              <button type="submit">Sign Up</button>
            </Button>
            <NotUp bg>
              Already have an Account???{" "}
              <NavLink style={{ textDecoration: "none" }} to="/signin">
                <span>Sign In</span>
              </NavLink>
            </NotUp>
          </SignUpHold>

          <br />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

// const Ddiv = styled.div``;

// const Div = styled.div`
//   height: 90vh;
//   width: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   z-index: 10;
// `;

const Container = styled.div`
  min-height: 89vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  position: relative;
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
  /* min-height: 550px; */
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
  margin-top: 20px;
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
const SignUpHold = styled.form``;
const PrevImgDiv = styled.div`
  height: 80px;
  width: 80px;
  background-color: gray;
  border-radius: 50%;
  margin: 10px 0;
  border: 1px solid gray;

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

const Error = styled.div`
  font-size: x-small;
  font-weight: bold;
  color: red;
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
