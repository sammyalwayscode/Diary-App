import React from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { AiFillHeart, AiFillWallet } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Global/GlobalState";
import Private from "./PrivateRoute";
import swal from "sweetalert";

const Header = () => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Logo to="/">
          {" "}
          <LogoIcon /> Dya.
        </Logo>

        <Navigate>
          {userData ? (
            <Private>
              <Nav to="/diary" className="tour-diary">
                {" "}
                <AiFillWallet />
                <small>Diaries</small>
              </Nav>
            </Private>
          ) : null}
          {userData ? (
            <Private>
              <Nav to="/newdiary" className="tour-create">
                {" "}
                <RiAddCircleLine />
                <small>Create</small>
              </Nav>
            </Private>
          ) : null}

          {userData ? (
            <Nav to="/favorite" className="tour-favourite">
              {" "}
              <AiFillHeart /> <small>Favourite</small>
            </Nav>
          ) : null}

          {userData ? (
            <Avatar
              to="/"
              onClick={() => {
                dispatch(signOut());
                swal("Logged Out 😒", "Log Out Sucessful", "success");
              }}
              className="tour-out"
            >
              <img src={userData?.avatar} alt="" />
            </Avatar>
          ) : (
            <Nav to="/signup">
              {" "}
              <MdAccountCircle /> <small>Log in</small>
            </Nav>
          )}
        </Navigate>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Avatar = styled(NavLink)`
  height: 30px;
  width: 30px;
  border-radius: 200px;
  border: 2px solid gray;
  cursor: pointer;

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
  width: 200px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 350ms;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  small {
    font-size: x-small;
  }
  :hover {
    color: #ff9505;
  }

  &.active {
    color: #ff9505;
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
