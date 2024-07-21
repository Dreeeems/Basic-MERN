import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Edit from "./pages/edit";
import Delete from "./pages/delete";
import New from "./pages/new";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/add" element={<New />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
