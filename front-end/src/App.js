import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home_all_sel from './all_sel/main.js';
import Home_sign_in from './sign_in/main.js';
import Home_sign_up from './sign_up/main.js';
import Home_set_acc from './set_acc/main.js';
import Home_search_rec from './search_rec/main.js';
import Home_groc_list from './groc_list/main.js';
import Header from './Header.js';



function App() {
  return (
    <a>
      <Header/>
      
      <h1>Food Safe, these are our page! (for developing use)</h1>

      <Router>
        <Routes>
          <Route path="/sign_in" element={<Home_sign_in />} />
          <Route path="" element={<Home_sign_in/>} />
          <Route path="/sign_up" element={<Home_sign_up />} />
          <Route path="/all_sel" element={<Home_all_sel />} />
          <Route path="/search_rec" element={<Home_search_rec />} />
          <Route  path="/groc_list" element={<Home_groc_list />} />
          <Route path="/set_acc" element={<Home_set_acc />} />
        </Routes>
    </Router>
    </a>

  );
}

export default App;
