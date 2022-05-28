import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Auth/SignUp";
import CreateDiary from "./Components/Home/CreateDiary";
import EditDiary from "./Components/Home/EditDiary";
import Favorite from "./Components/Home/Favorite";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SignUp />} />
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
