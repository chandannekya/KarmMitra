import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SignUpPage from "./components/SignIn-SignUp/SignUpPage";
import SignInPage from "./components/SignInPage";
import { Routes } from "react-router-dom";
import LabourProfile from "./components/Hero-Section/LabourProfile";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Hero-Section/Carousel";
import SidePanel from "./components/Hero-Section/SidePannel";
// import Navbar from "./components/Navbar/Navbar";
// import Page from "./components/Hero-Section/Page";
// import LabourCard from "./components/Hero-Section/LabourCard";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel></Carousel>
      <SidePanel></SidePanel>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
};

export default App;
