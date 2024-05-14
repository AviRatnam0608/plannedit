"use client";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ChatPage from "@/components/chatPage";
import HomePage from "@/components/homePage";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="py-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/read-more">Read More</Link>
            </li>
            <li>
              <Link to="/chatPage">Chat</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" Component={HomePage} />
          {/* <Route path="/read-more" component={ReadMorePage} /> */}
          <Route path="/chatPage" Component={ChatPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
