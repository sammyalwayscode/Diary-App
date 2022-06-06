import axios from "axios";
import React, { useEffect } from "react";
import { AiFillHeart, AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, addMomery } from "../Global/GlobalState";
import moment from "moment";
import swal from "sweetalert";
import { GrAddCircle } from "react-icons/gr";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);
  const memo = useSelector((state) => state.memories);

  const id = user._id;
  const diy = user.diary;
  console.log(diy);

  const onGetData = async () => {
    try {
      const mainURL = "https://sam-diary.herokuapp.com";
      const URL = `${mainURL}/api/userdiary/diary/${id}`;

      await axios.get(URL).then((res) => {
        // setGetData(res.data.data.diary);
        dispatch(addMomery(res.data.data.diary));
      });

      // console.log(getData);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const deleteDiary = () => {

  // }

  useEffect(() => {
    onGetData();
  }, []);

  return (
    <Container>
      <h1>All Diary List</h1>
      <Wrapper>
        {memo === null ? (
          <NotContain>
            <Nott>
              <img src="/data.svg" alt="" />
              <strong>
                Empty Diary List, Click <GrAddCircle /> To Create Your Diary
              </strong>
            </Nott>
          </NotContain>
        ) : (
          <>
            {memo?.map((props) => (
              <DiaryHold key={props._id}>
                <DiaryCard>
                  <Dated>
                    {" "}
                    {moment(props.createdAt).format("MMMM Do YYYY")}{" "}
                  </Dated>
                  <BreakDay>
                    <hr />
                    <span> {moment(props.createdAt).format("dddd")} </span>
                    <hr />
                  </BreakDay>
                  <TitlePix>
                    <ImageDiv>
                      <img src={props.image} alt="" />
                    </ImageDiv>
                    <Title> {props.title} </Title>
                  </TitlePix>
                  <Contents>{props.message}</Contents>
                  <PostedEdit>
                    <AgoPost> {moment(props.createdAt).fromNow()} </AgoPost>
                    <OtherMethods>
                      <Icon1
                        onClick={() => {
                          dispatch(addFavorite(props));
                          swal(props.title, "Added to Favorite");
                        }}
                      >
                        {" "}
                        <AiFillHeart color="red" />{" "}
                      </Icon1>
                      <Icon2 to={`/updatediary/${props._id}`}>
                        {" "}
                        <BiEdit />{" "}
                      </Icon2>
                      <Icon3
                        onClick={() => {
                          swal(
                            "Can't Preform Action",
                            `Can't Delete ${props.title} now, Update Comming Soon`,
                            "error"
                          );
                        }}
                      >
                        {" "}
                        <AiTwotoneDelete />{" "}
                      </Icon3>
                    </OtherMethods>
                  </PostedEdit>
                </DiaryCard>
              </DiaryHold>
            ))}
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;

const NotContain = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nott = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 150px;
    margin-bottom: 15px;
  }
  strong {
    font-size: small;
  }
`;

const Container = styled.div`
  font-family: poppins;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  h1 {
    font-weight: 800;
  }
`;
const Wrapper = styled.div`
  width: 1200px;

  @media (max-width: 1200px) {
    width: 85%;
  }
`;
const DiaryHold = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const DiaryCard = styled.div`
  width: 94%;
  margin: 15px 0;
`;
const Dated = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 270;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
const BreakDay = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  hr {
    width: 30%;
    height: 1px;
    border: 1px solid silver;
    border-radius: 5px;
  }

  span {
    font-size: 22px;
    @media (max-width: 500px) {
      font-size: 17px;
    }
  }
`;
const TitlePix = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 800;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
const ImageDiv = styled.div`
  height: 60px;
  width: 100%;
  opacity: 0.8;
  cursor: pointer;
  /* border-radius: 50%; */
  overflow: hidden;
  @media (max-width: 500px) {
    height: 50px;
  }
  :hover {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    /* border-radius: 50%; */
    object-fit: cover;
    transition: all 350ms;

    :hover {
      transform: scale(1.1);
    }
  }
`;
const Contents = styled.div`
  margin-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 14px;
    font-weight: 290;
  }
`;
const PostedEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AgoPost = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #aaa;
`;
const OtherMethods = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    height: 30px;
    cursor: pointer;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 30px;
    transition: all 350ms;
  }
`;

const Icon1 = styled.span`
  :hover {
    background-color: gold;
    color: #fff;
  }
`;
const Icon2 = styled(NavLink)`
  text-decoration: none;
  height: 30px;
  cursor: pointer;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 30px;
  transition: all 350ms;
  color: #000;
  :hover {
    background-color: lightblue;
    color: #fff;
  }
`;
const Icon3 = styled.span`
  :hover {
    background-color: red;
    color: #fff;
  }
`;
