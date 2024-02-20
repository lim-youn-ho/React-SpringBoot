import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';

function App() {


  return (
      <div>
          <Router>
                  <Routes>
                      <Route path="/" element={<Login />} />
                  </Routes>
         </Router>
      </div>
  );
}

export default App;