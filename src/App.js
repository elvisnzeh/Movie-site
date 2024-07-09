import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Provider from "./UseContext";

const App = () => {
  return (
    <>
      <Provider>
        <Home />
      </Provider>
      <div>
        <Routes>
          <Route path="/home" element={Home} />
        </Routes>
      </div>
    </>
  );
};

export default App;
