import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import ShowAnswer from "./pages/ShowAnswer";
import ShowQuestion from "./pages/ShowQuestion";
import "./app.css";
const App = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [storeCorrectAnswer, setStoreCorrectAnswer] = useState({
    title: "",
    answer: "",
  });
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setStoreCorrectAnswer={setStoreCorrectAnswer}
                setIsAnswered={setIsAnswered}
              />
            }
          />
          <Route path="/question" element={<ShowQuestion />} />
          <Route
            path="/answer/*"
            element={
              isAnswered ? (
                <ShowAnswer
                  storeCorrectAnswer={storeCorrectAnswer}
                  title="Correct"
                />
              ) : (
                <ShowAnswer
                  storeCorrectAnswer={storeCorrectAnswer}
                  title="Wrong"
                />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
