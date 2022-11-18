import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Search from './components/Search';
import WishList from './components/WishList';

function App() {
  const[username,setusername]=useState("")
  const[wishList,setwishList]=useState([])
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/wishlist">Wish List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/search" element={<Search username={username} wishList={wishList} setwishList={setwishList}/>}>
          </Route>
          <Route path="/wishlist" element={<WishList wishList={wishList} setwishList={setwishList}/>}>
          </Route>
          <Route path="/" element={<Home setusername={setusername}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
