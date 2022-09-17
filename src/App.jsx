import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Test from "./pages/Test";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
