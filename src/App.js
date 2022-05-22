import React from "react";
import { Routes, Route } from 'react-router-dom'
import { About } from "./Components/about";
import { Home } from "./Components/home";
import { NavBar } from "./Components/NavBar";
import { LoginPage} from "./Components/LoginPage";
import Form from "./Components/register form";
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/register" element={<Form />} />
      </Routes>

    </div>
  )};
export default App;