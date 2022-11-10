import React, { useState } from "react";
import styled from "styled-components";
import { ImBooks } from "react-icons/im";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";

const CreateDiary = () => {
  const user = useSelector((state) => state.currentUser);
  const id = user._id;
  const dia = user.diary;
  console.log(id);
  console.log(dia);

  const navigate = useNavigate();

  const [image, setImage] = useState("/diary.jpg");
  const [avatar, setAvatar] = useState("");

  let [loading, setLoading] = useState(false);
  const loadChange = () => {
    setLoading(true);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("This Filed Cannot Be Empty"),
    message: yup.string().required("This Field Cannot Be Empty"),
  });

  const {
    register,
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

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { message, title } = value;
    const mainURL = "https://sam-diary.herokuapp.com";
    // const mainURL = "http://localhost:2120";
    const URL = `${mainURL}/api/userdiary/diary/${id}`;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("message", message);
    formData.append("image", avatar);

    const config = {
      "content-type": "multipart/form-data",
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const precent = Math.floor((loaded * 100) / total);
        console.log(precent);
      },
    };

    await axios
      .post(URL, formData, config)
      .then((res) => {
        console.log("Data: ", res);
        swal("Great! 😁", "Diary Sucessfully Created", "success").then(() => {
          setLoading(false);
          navigate("/diary");
        });
      })
      .catch((error) => {
        swal({
          title: " An Error Occoured",
          text: "Be Sure to Upload an Image, also check your Network Connection",
          icon: "error",
        }).then(() => {
          setLoading(false);
        });
      });
  });

  return (
    <>
      {loading ? (
        <Div className="sweet-loading">
          <HashLoader loading={loading} size={100} />
        </Div>
      ) : null}

      <Container>
        <Wrapper>
          <Card onSubmit={onSubmit}>
            <MainTitle>
              <Title>
                <ImBooks /> DYA.
              </Title>
            </MainTitle>
            <strong>Create A Diary</strong>
            <CreateHold>
              <ImageHolder>
                <PrevImgDiv>
                  <img src={image} alt="" />
                </PrevImgDiv>
                <small>Important!!!</small>
                <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
                <ImageInput
                  id="pix"
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />
              </ImageHolder>

              <InputCtrl>
                <span>Title</span>
                <input
                  placeholder="What's the title of your notes"
                  {...register("title")}
                />
                <Error> {errors.title?.mesaage} </Error>
              </InputCtrl>
              <InputCtrl>
                <span>Notes</span>
                <textarea
                  placeholder="Write your Notes Here"
                  {...register("message")}
                />
                <Error> {errors.message?.mesaage} </Error>
              </InputCtrl>
            </CreateHold>
            <Button>
              <button onClick={loadChange} type="submit">
                Create Diary
              </button>
            </Button>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default CreateDiary;

const Div = styled.div`
  height: 90vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
`;

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
  small {
    color: red;
    font-weight: 600;
  }
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

  textarea {
    height: 100px;
    font-family: poppins;
    resize: none;
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
    width: 130px;
    font-family: poppins;
    font-weight: 600;
    background-color: #ff9505;
    color: #fff;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;
