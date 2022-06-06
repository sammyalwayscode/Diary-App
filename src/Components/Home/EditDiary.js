import React from "react";
import styled from "styled-components";
import { ImBooks } from "react-icons/im";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";

const EditDiary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const userId = useSelector((state) => state.currentUser);

  const formSchema = yup.object().shape({
    title: yup.string().required("This Field is Necessary"),
    message: yup.string().required("This Field is Necessary"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { title, message } = value;
    const mainURL = "https://sam-diary.herokuapp.com";
    const URL = `${mainURL}/api/userdiary/diary/${userId._id}/${id}`;

    await axios
      .patch(URL, { title, message })
      .then((res) => {
        console.log("Edited", res);
      })
      .catch(() => {
        console.log("Couldn't Edit");
      });

    swal("Great 👍", "Diary Updated Sucessfully", "success");

    navigate("/diary");
  });

  return (
    <Container>
      <Wrapper>
        <Card onSubmit={onSubmit}>
          <MainTitle>
            <Title>
              <ImBooks /> DYA.
            </Title>
          </MainTitle>
          <CreateHold>
            {/* <ImageHolder>
              <PrevImgDiv>
                <img src="" alt="" />
              </PrevImgDiv>
              <ImageLabel htmlFor="pix">Update your Image</ImageLabel>
              <ImageInput id="pix" type="file" accept="image/*" />
            </ImageHolder> */}

            <InputCtrl>
              <span>Title</span>
              <input placeholder="Update your Title" {...register("title")} />
              <Error> {errors.message && errors?.mesaage.title} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Notes</span>
              <textarea
                placeholder="Update your Notes Here"
                {...register("message")}
              />
              <Error> {errors.message && errors?.mesaage.message} </Error>
            </InputCtrl>
          </CreateHold>
          <Button>
            <button type="submit">Update Diary</button>
          </Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default EditDiary;

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

const Card = styled.form`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 500px;
  min-height: 400px;
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

const CreateHold = styled.div``;
const Error = styled.div`
  font-size: x-small;
  font-weight: bold;
  color: red;
`;

// const PrevImgDiv = styled.div`
//   height: 80px;
//   width: 80px;
//   background-color: aqua;
//   border-radius: 50%;
//   margin: 10px 0;

//   img {
//     height: 100%;
//     width: 100%;
//     border-radius: 50%;
//     object-fit: cover;
//   }
// `;
// const ImageInput = styled.input`
//   display: none;
// `;

// const ImageLabel = styled.label`
//   padding: 6px 12px;
//   background-color: #000;
//   color: white;
//   border-radius: 3px;
//   transition: all 350ms;
//   font-size: 14px;
//   outline: none;
//   border: 0;

//   :hover {
//     cursor: pointer;
//     transform: scale(1.01);
//   }
// `;

// const ImageHolder = styled.div`
//   width: 100%;
//   align-items: center;
//   display: flex;
//   flex-direction: column;
// `;
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

  textarea {
    height: 100px;
    font-family: poppins;
    resize: none;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  button {
    height: 32px;
    width: 130px;
    font-family: poppins;
    font-weight: 600;
    /* background-color: #ff9505; */
    background-color: lightblue;
    color: #fff;
    font-weight: 800;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;
