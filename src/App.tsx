import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AtmPage from "./pages/atmPage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AtmPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
