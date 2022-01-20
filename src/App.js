import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import ShowAnswer from "./pages/ShowAnswer";
import ShowQuestion from "./pages/ShowQuestion";
import "./app.css";
const App = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setIsAnswered={setIsAnswered} />} />
          <Route path="/question" element={<ShowQuestion />} />
          <Route
            path="/answer/*"
            element={
              isAnswered ? (
                <ShowAnswer title="Correct" />
              ) : (
                <ShowAnswer title="Wrong" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
