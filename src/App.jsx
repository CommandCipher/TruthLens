import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";

import Login from "./pages/Login";
import Analysis from "./pages/Analysis";
import Result from "./pages/Result";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
    </>
  );
}

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
     AOS.refresh();
}, []);
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/analysis" element={<Analysis />} />

        <Route path="/result" element={<Result />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;