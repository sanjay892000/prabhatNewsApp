import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes,Route} from "react-router-dom";
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default function App() {
 const pageSize=15;
 const country='in';
    return (
      <>
      <Router>
      <div className='conatiner'>
      <NavBar/>
      <Routes>
      <Route key={'General'} path="/" element={ <News page={pageSize} category={'general'} country={country}/>} />
      <Route key={'Business'} path="/Business" element={<News page={pageSize} category={'business'} country={country}/>} />
      <Route key={'Entertainment'} path="/Entertainment" element={<News  page={pageSize} category={'entertainment'} country={country}/>} />
      <Route key={'Health'} path="/Health" element={<News page={pageSize} category={'health'} country={country}/>} />
      <Route key={'Science'} path="/Science" element={<News page={pageSize} category={'science'} country={country}/>} />
      <Route key={'Sports'} path="/Sports" element={<News  page={pageSize} category={'sports'} country={country}/>} />
      <Route key={'Technology'} path="/Technology" element={<News page={pageSize} category={'technology'} country={country}/>} />
       </Routes>
      </div>
      </Router>
      </>
    )
  
}

