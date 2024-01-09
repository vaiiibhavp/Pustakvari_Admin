import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./Layout/MainContent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainContent />}>
          <Route path="/" element={"hello"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
