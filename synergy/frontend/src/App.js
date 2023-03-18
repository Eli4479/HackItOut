import './App.css';
import Log from "./pages/login";
import React from 'react';
import Registration from "./pages/register";
import Teams from "./pages/teams"
import Todo from "./pages/todo";
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
            <Route path="/todo" element={<Todo />} />

            {/* <Log /> */}
            {/* <Registration /> */}
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
