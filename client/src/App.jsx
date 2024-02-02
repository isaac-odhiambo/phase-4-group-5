//App.jsx
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register/Register'
import Login from "./components/Login/Login";
import Properties from "./components/Properties/Properties";
import About from "./components/About/About";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Details from "./components/Details/Details"

import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/About" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        < Footer />
      </BrowserRouter>
    </>
  );
}

export default App
