import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import PostWrite from './pages/PostWrite';
import Post from './pages/Post';
import Guard from './pages/Guard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/posts' element={<Posts></Posts>}></Route>
          <Route path='/post-write' element={<Guard><PostWrite></PostWrite></Guard>}></Route>
          <Route path='/post/:postId' element={<Guard><Post></Post></Guard>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);

