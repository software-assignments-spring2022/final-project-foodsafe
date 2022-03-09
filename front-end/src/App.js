import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home_all_sel from './all_sel/main.js';
import Home_sign_in from './sign_in/main.js';
import Home_sign_up from './sign_up/main.js';
import Home_set_acc from './set_acc/main.js';
import Home_search_rec from './search_rec/main.js';
import Home_groc_list from './groc_list/main.js';
import Header from './Header.js'



function App() {
  return (
    <a>
      <Header/>
      <h1>Food Safe, these are our page! (for developing use)</h1>
      <ul>
        <li><a href="/sign_in">1 sign in page</a></li>
        <li><a href="/sign_up">2 sign up page</a></li>
        <li><a href="/all_sel">3 allergy selection page</a></li>
        <li><a href="/search_rec">4 Search + recommend categories (home)</a></li>
        <li><a href="/groc_list">5 grocery list page</a></li>
        <li><a href="/set_acc">6 Settings + account management page</a></li>
      </ul>
      <Router>
        <Routes>
          <Route path="/sign_in" element={<Home_sign_in />} />
          <Route path="/sign_up" element={<Home_sign_up />} />
          <Route path="/all_sel" element={<Home_all_sel />} />
          <Route path="/search_rec" element={<Home_search_rec />} />
          <Route path="/groc_list" element={<Home_groc_list />} />
          <Route path="/set_acc" element={<Home_set_acc />} />
        </Routes>
    </Router>
    </a>

  );
}

export default App;
