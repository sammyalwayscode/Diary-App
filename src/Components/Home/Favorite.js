import moment from "moment";
import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeFavorite } from "../Global/GlobalState";

const Favorite = () => {
  const memo = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>Your Favorite List</h1>
      <Wrapper>
        {memo?.map((props) => (
          <DiaryHold key={props._id}>
            <DiaryCard>
              <Dated>{moment(props.createdAt).format("MMMM Do YYYY")}</Dated>
              <BreakDay>
                <hr />
                <span> {moment(props.createdAt).format("dddd")}</span>
                <hr />
              </BreakDay>
              <TitlePix>
                <ImageDiv>
                  <img src={props.image} alt="" />
                </ImageDiv>
                <Title>{props.title}</Title>
              </TitlePix>
              <Contents>{props.message}</Contents>
              <PostedEdit>
                <AgoPost>.</AgoPost>
                <OtherMethods
                  onClick={() => {
                    dispatch(removeFavorite(props));
                  }}
                >
                  <span>
                    {" "}
                    <BsFillHeartFill />{" "}
                  </span>
                </OtherMethods>
              </PostedEdit>
            </DiaryCard>
          </DiaryHold>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Favorite;

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
  span {
    cursor: pointer;
    font-size: 30px;
    transition: all 350ms;
    color: red;
  }
`;
