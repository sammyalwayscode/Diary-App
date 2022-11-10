import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Auth/SignUp";
import CreateDiary from "./Components/Home/CreateDiary";
import EditDiary from "./Components/Home/EditDiary";
import Favorite from "./Components/Home/Favorite";
import Signin from "./Components/Auth/SignIn";
import LandingPage from "./Components/Home/LandingPage";
import Tour from "./Components/Tour";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Tour />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/diary" element={<Home />} />
          <Route path="/newdiary" element={<CreateDiary />} />
          <Route path="/updatediary/:id" element={<EditDiary />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
