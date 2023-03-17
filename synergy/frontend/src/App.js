import './App.css';
import Log from "./pages/login";
import React from 'react';
import Registration from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Log />} />
            <Route path="/teams" element={<Teams />} />

            {/* <Log /> */}
            {/* <Registration /> */}
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
