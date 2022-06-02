import React from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userData = useSelector((state) => state.currentUser);
  return (
    <Container>
      <Wrapper>
        <Logo to="/diary">
          {" "}
          <LogoIcon /> Dya.
        </Logo>

        <Navigate>
          <Nav to="/newdiary">
            {" "}
            <RiAddCircleLine />
          </Nav>
          <Nav to="/favorite">
            {" "}
            <AiFillHeart />{" "}
          </Nav>
          <Nav to="/">
            {" "}
            <MdAccountCircle />{" "}
          </Nav>
          <Avatar>
            <img src={userData?.avatar} alt="" />
          </Avatar>
        </Navigate>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Avatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 200px;
  border: 2px solid gray;

  img {
    height: 100%;
    width: 100%;
    border-radius: 200px;
    object-fit: cover;
  }
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #fff;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    width: 85%;
  }
`;
const Logo = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: #ec4e20; */
`;

const LogoIcon = styled(ImBooks)`
  margin-right: 4px;
`;

const Navigate = styled.div`
  width: 130px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled(NavLink)`
  height: 35px;
  width: 35px;
  /* background-color: blue; */
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 350ms;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #ff9505;
  }

  &.active {
    background-color: #ff9505;
  }
`;

// const DropDown = styled.div`
//   position: relative;
//   /* background-color: aliceblue; */
//   width: 200px;
// `;
// const DropCtr = styled.div`
//   position: absolute;
//   height: 150px;
//   width: 100%;
//   background-color: #000;
//   margin-top: 25px;
//   display: flex;
//   justify-content: center;
//   /* align-items: center; */
//   border-radius: 10px 0 10px 10px;
// `;

// const Dr = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-end;
// `;

// const DropIcon2 = styled(BsJournalBookmark)`
//   font-size: 25px;
//   cursor: pointer;
//   transition: all 350ms;
//   :hover {
//     transform: scale(0.93);
//   }
// `;
// const DropIcon = styled(BsJournalBookmarkFill)`
//   font-size: 25px;
//   cursor: pointer;
//   transition: all 350ms;
//   :hover {
//     transform: scale(0.93);
//   }
// `;
// const DropCtrWrap = styled.div`
//   width: 85%;
//   /* background-color: blue; */
//   margin: 10px 0;
// `;

// const NavHold = styled.div`
//   height: 30px;
//   width: 100%;
//   /* background-color: red; */
//   margin-bottom: 10px;
//   display: flex;
//   align-items: center;
//   font-family: poppins;
//   font-size: 16px;
//   font-weight: 700;
//   cursor: pointer;
//   border-radius: 20px;
//   /* color: ${({ bg }) => (bg ? "#EC4E20" : "FF9505")}; */
//   :hover {
//     background-color: #ff9505;
//   }

//   /* span {
//     margin-left: 5px;
//   } */
// `;
