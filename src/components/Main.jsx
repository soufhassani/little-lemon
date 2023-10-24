import React, { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import Login from "../pages/Login";
import Book from "../pages/Book";

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([
    { time: "17:00", check: false },
    { time: "18:00", check: false },
    { time: "19:00", check: false },
    { time: "20:00", check: false },
    { time: "21:00", check: false },
    { time: "22:00", check: false },
  ]);
  const availableTimesInit = [
    { time: "17:00", check: false },
    { time: "18:00", check: false },
    { time: "19:00", check: false },
    { time: "20:00", check: false },
    { time: "21:00", check: false },
    { time: "22:00", check: false },
  ];
  const reducer = (state, action) => {
    console.log("initial state: ", state);
    console.log("action: ", action);
    // const getTime = state.find( ( s ) => s.time === action.time );
    for (let s of state) {
      if (s.time === action.time) {
        console.log(state.indexOf(s));
        const idx = state.indexOf(s);
        // state.splice(idx, 1);
        // console.log([...state, { time: s.time, check: !s.check }]);
        state[idx] = { time: s.time, check: !s.check };
        console.log("s.checkL: ", state[idx].check);
        console.log(state);
        return state;
      }
    }
    // console.log( "getTime:", getTime );
    // getTime.
    console.log("state: ", state);
  };

  const [state, dispatch] = useReducer(reducer, availableTimesInit);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/book"
        element={<Book availableTimes={state} setAvailableTimes={dispatch} />}
      />
    </Routes>
  );
};

export default Main;
