import "./App.css";
import Log from "./pages/login";
import React from "react";
import Registration from "./pages/register";
import Teams from "./pages/teams";
import Todo from "./pages/todo";
import video from "./components/video";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AddNew from "./components/add";

import "./components/LandingPage.css";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                </>
              }
            />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Log />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/add" element={<AddNew />} />

            {/* <Log /> */}
            {/* <Registration /> */}
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
