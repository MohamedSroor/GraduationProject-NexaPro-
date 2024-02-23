import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/home";
import SideBar from "../src/components/SideBar/SideBar";
import ProjectHome from "./components/projectHome/projecthome";
import ProjectTeam from "./components/ProjectTeam/ProjectTeam";
import Analytics from "./components/Analytics/Analytics";
import SignupLogin from "../src/components/Signup&login/Signup&Login";
import Notes from "./components/Notes/Notes";
import Chat from "./components/Chat/Chat";
import Edit from "./components/editProfile/Edit";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/home" element={<ProjectHome />} />
        <Route path="/team" element={<ProjectTeam />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/Signup" element={<SignupLogin/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/edit" element={<Edit/>} /> 
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </Router>
  );
}

export default App;
