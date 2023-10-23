import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Login from "./pages/Login";
import Book from "./pages/Book";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </>
  );
}

export default App;
