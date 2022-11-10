import { ImBooks } from "react-icons/im";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../Global/GlobalState";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("This Field Is Required"),
    password: yup.string().required("Password Needed"),
  });

  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSummit = handleSubmit(async (value) => {
    console.log(value);
    const { email, password } = value;
    const mainURL = "https://sam-diary.herokuapp.com";
    // const mainURL = "http://localhost:2120";
    const URL = `${mainURL}/api/diary/user/signin`;

    await axios
      .post(URL, { email, password })
      .then((res) => {
        // console.log(res.data.data);
        dispatch(createUser(res.data.data));
        swal({
          title: `Signed In Sucessfully ✌️`,
          text: "You Can Now Start Creating Awesome Diaries",
          icon: "success",
          button: "Proceed",
        }).then(() => {
          navigate("/newdiary");
        });
      })
      .catch((error) => {
        swal({
          title: error.response.data.status,
          text: "An Error Occoured, Do Check your network Connection",
          icon: "error",
        });
      });
  });

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

          <SignInHold onSubmit={onSummit}>
            <InputCtrl>
              <span>Your Email</span>
              <input
                placeholder="Enter Your Email Address"
                {...register("email")}
              />
              <Error> {errors.mesaage && errors?.message.email} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter Your Password"
                {...register("password")}
              />
              <Error> {errors.message && errors.mesaage.password} </Error>
            </InputCtrl>
            <Button>
              <button type="submit">Sign In</button>
            </Button>
            <NotUp>
              Don't have an Account???{" "}
              <NavLink style={{ textDecoration: "none" }} to="/">
                {" "}
                <span>Sign Up</span>
              </NavLink>
            </NotUp>
          </SignInHold>

          <br />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Signin;

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

const SignInHold = styled.form``;
