"use client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "@/pages/chatPage";
import HomePage from "@/pages/homePage";
import NavBar from "@/components/navbar/navbar";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/chatPage" Component={ChatPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
